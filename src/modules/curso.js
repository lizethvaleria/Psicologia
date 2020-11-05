import Vue from "vue";
import firebase from "@/services/firebase";

const cursoInLocalStorage = localStorage.cursouanlestres2020;

if (cursoInLocalStorage) {
  console.log("Cargando de localstorage");
} else {
  console.log("Creando sesion");
}

const curso = cursoInLocalStorage
  ? JSON.parse(cursoInLocalStorage)
  : {
      idfirebase: null,
      usuario: {
        idusuario: null,
        nomusuario: "",
        estudiante_uanl: null,
        preparatoria: "",
        trabajo: null,
        nomtrabajo: "",
        email: "",
        matricula: "",
        estatus: 1
      },
      fecha: "",
      continuar: true,
      video_rector: false,
      reglas_aceptadas: false,
      informacion_llenada: false,
      temas: [
        {
          numero: 1,
          nombre: "Observar y Conocer",
          active: false,
          completado: false,
          secciones: [
            {
              numero: 1,
              active: false,
              completado: false,
              preguntas: [{ respuesta: "" }]
            }
          ]
        },
        {
          numero: 2,
          nombre: "Manejo de mi Inteligencia Emocional",
          active: false,
          completado: false,
          secciones: [{ numero: 1, active: false, completado: false }]
        },
        {
          numero: 3,
          nombre: "El sendero de mis emociones",
          active: false,
          completado: false,
          secciones: [
            {
              numero: 1,
              active: false,
              completado: false,
              preguntas: [
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" }
              ]
            },
            {
              numero: 2,
              active: false,
              completado: false,
              preguntas: [
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" }
              ]
            },
            {
              numero: 3,
              active: false,
              completado: false,
              preguntas: [
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" }
              ]
            },
            {
              numero: 4,
              active: false,
              completado: false,
              preguntas: [
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" }
              ]
            },
            {
              numero: 5,
              active: false,
              completado: false,
              preguntas: [
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" },
                { respuesta: "" }
              ]
            }
          ]
        }
      ],
      tema_actual: 1,
      seccion_actual: 1
    };

// Regresa el id del nuevo documento guardado
const agregarAFirestore = async curso => {
  try {
    const cursoToAdd = Object.assign({}, curso);
    cursoToAdd.fecha = firebase.firestore.FieldValue.serverTimestamp();
    const cursoId = (
      await firebase
        .firestore()
        .collection("curso")
        .add(cursoToAdd)
    ).id;
    return cursoId;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};

if (!curso.idfirebase) {
  agregarAFirestore(curso).then(idfirebase => {
    curso.idfirebase = idfirebase;
    localStorage.cursouanlestres2020 = JSON.stringify(curso);
    console.log("Curso agregado con el id: ", curso.idfirebase);
  });
}

export default {
  state: {
    curso: curso
  },
  mutations: {
    setCurso(state, curso) {
      state.curso = Object.assign({}, curso);
    }
  },
  actions: {
    setCurso({ commit }, curso) {
      commit('setCurso', curso);
      this.actualizarEnFirestore();
      this.guardarEnLocalStorage();
    }, 
    actualizarEnFirestore({ state }) {
      const curso = Object.assign({}, state.curso);
      curso.fecha = firebase.firestore.FieldValue.serverTimestamp();
      firebase
        .firestore()
        .collection("curso")
        .doc(curso.idfirebase)
        .set(curso);
    },
    guardarEnLocalStorage({ state }) {
      localStorage.cursouanlestres2020 = JSON.stringify(state.curso);
    },
    avanzarSeccion({ state, dispatch }) {
      let tema = state.curso.temas[state.curso.tema_actual - 1];
      // On last seccion of last tema
      if (
        state.curso.tema_actual === state.curso.temas.length &&
        state.curso.seccion_actual === tema.seccion_actual.length
      ) {
        return;
      }

      if (state.curso.seccion_actual < tema.secciones.length) {
        state.curso.seccion_actual++;
      } else {
        state.curso.tema_actual++;
        state.curso.seccion_actual = 1;
      }

      dispatch("guardarEnLocalStorage");
      dispatch("actualizarEnFirestore");
    },
    Consultar_Info_Firebase(context) {
      firebase
        .firestore()
        .collection("curso")
        .doc(context.state.curso.idfirebase)
        .get()
        .then(function(doc) {
          if (doc.exists) {
            var datos = doc.data();
            if (
              datos.reglas_aceptadas &&
              datos.informacion_llenada &&
              datos.usuario.estudiante_uanl != null &&
              datos.usuario.trabajo != null
            ) {
              for (var i = 0; i < datos.temas.length; i++) {
                datos.temas[i].active = false;
                for (var x = 0; x < datos.temas[i].secciones.length; x++) {
                  datos.temas[i].secciones[x].active = false;
                }
              }
              datos.temas[0].active = true;
              datos.temas[0].secciones[0].active = true;
              context.commit("setCurso", datos);
            } else {
              context.commit("setCurso", doc.data());
            }
            context.commit("Guardar_En_LocalStorage");
          } else {
            context.commit(
              "setCurso",
              JSON.parse(localStorage.cursouanlestres2020)
            );
          }
        })
        .catch(error => {
          context.commit(
            "setCurso",
            JSON.parse(localStorage.cursouanlestres2020)
          );
        });
    },
    Crear_Sesion_Firebase(context) {
      context.state.curso.fecha = firebase.firestore.FieldValue.serverTimestamp();
      firebase
        .firestore()
        .collection("curso")
        .add(context.state.curso)
        .then(refDoc => {
          console.log(refDoc.id);
          context.state.curso.idfirebase = refDoc.id;
          localStorage.cursouanlestres2020 = JSON.stringify(
            context.state.curso
          );
          context.dispatch("Guardar_En_Firebase");
        })
        .catch(error => {
          context.state.curso.idfirebase = null;
          localStorage.cursouanlestres2020 = JSON.stringify(
            context.state.curso
          );
        });
    },
    Guardar_En_Firebase(context, recargar) {
      firebase
        .firestore()
        .collection("curso")
        .doc(context.state.curso.idfirebase)
        .set(context.state.curso)
        .then(function(snapshot) {
          if (recargar == "si") {
            location.reload();
          }
        });
    },
    Guardar_En_LocalStorage(context) {
      localStorage.cursouanlestres2020 = JSON.stringify(context.state.curso);
    },
    LocalStorage_Avance(context) {
      if (
        !localStorage.getItem("cursouanlestres2020") ||
        localStorage.getItem("cursouanlestres2020") == "undefined" ||
        localStorage.getItem("cursouanlestres2020") == undefined
      ) {
        context.dispatch("Crear_Sesion_Firebase");
      } else {
        var curso = JSON.parse(localStorage.cursouanlestres2020);
        if (curso.idfirebase == null) {
          context.dispatch("Crear_Sesion_Firebase");
        } else {
          context.commit(
            "setCurso",
            JSON.parse(localStorage.cursouanlestres2020)
          );
          context.dispatch("Consultar_Info_Firebase");
        }
      }
    },
    Seccion_Completada(context, data) {
      for (var i = 0; i < context.state.curso.temas.length; i++) {
        if (context.state.curso.temas[i].numero == data.numero_tema) {
          for (
            var x = 0;
            x < context.state.curso.temas[i].secciones.length;
            x++
          ) {
            if (
              context.state.curso.temas[i].secciones[x].numero ==
              data.numero_seccion
            ) {
              context.state.curso.temas[i].secciones[x].completado = true;
              if (
                context.state.curso.temas[i].secciones[x].numero ==
                context.state.curso.temas[i].secciones.length
              ) {
                context.state.curso.temas[i].completado = true;
              }
              localStorage.cursouanlestres2020 = JSON.stringify(
                context.state.curso
              );
            }
          }
        }
      }
    },
    Consultar_Cia(context) {
      Vue.http
        .get("cia")
        .then(respuesta => {
          return respuesta.json();
        })
        .then(respuestaJson => {
          if (respuestaJson.length > 0) {
            context.commit("setCia", respuestaJson[0]);
          }
        })
        .catch(error => {});
    }
  },
  getters: {
    getCurso(state) {
      return Object.assign({}, state.curso);
    }
  }
};
