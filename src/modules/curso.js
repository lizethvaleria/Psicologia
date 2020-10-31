import Vue from 'vue';
import firebase from 'firebase';
export default {
    state:{
      curso:{
        idfirebase:null,
        usuario:{
          idusuario:null,
          nomusuario:'',
          estudiante_uanl:null,
          facultad:'Agronomía',
          trabajo:null,
          nomtrabajo:'',
          email:'',
          estatus:1
        },
        fecha:'',
        continuar:true,
        video_rector:false,
        reglas_aceptadas:false,
        informacion_llenada:false,
        temas:[
          {
            numero:1,
            nombre:'Observar y Conocer',
            active:false,
            completado:false,
            secciones:[
              { 
                numero:1,
                active:false,
                completado:false,
                preguntas: [
                  {respuesta: ''}
                ]
              },
            ]
          },
          {
            numero:2,
            nombre:'Distinguir',
            active:false,
            completado:false,
            secciones:[
              {
                numero:1,
                active:false,
                completado:false,
                resultado:0,
                preguntas:[
                  {
                      numero:1,
                      pregunta:'¿Con qué frecuencia ha tenido dificultad para dormir?',
                      respuestas:[
                          {id:'1_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'1_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'1_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'1_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'1_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                  {
                      numero:2,
                      pregunta:'¿Con qué frecuencia se ve afectado por algo que ha ocurrido inesperadamente?',
                      respuestas:[
                          {id:'2_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'2_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'2_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'2_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'2_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                  {
                      numero:3,
                      pregunta:'¿Con qué frecuencia se ha sentido nervioso o estresado?',
                      respuestas:[
                          {id:'3_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'3_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'3_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'3_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'3_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                  {
                      numero:4,
                      pregunta:'¿Con qué frecuencia se ha sentido con la sensación de cansancio o agotamiento?',
                      respuestas:[
                          {id:'4_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'4_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'4_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'4_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'4_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                  {
                      numero:5,
                      pregunta:'¿Con qué frecuencia ha sentido que sus asuntos personales van cada día más mal?',
                      respuestas:[
                          {id:'5_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'5_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'5_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'5_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'5_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                  {
                      numero:6,
                      pregunta:'¿Con que frecuencia se siente decepcionado de los demás?',
                      respuestas:[
                          {id:'6_1',valor:1,respuesta:'Nunca',selected:false},
                          {id:'6_2',valor:2,respuesta:'Casi nunca',selected:false},
                          {id:'6_3',valor:3,respuesta:'A veces',selected:false},
                          {id:'6_4',valor:4,respuesta:'Casi siempre',selected:false},
                          {id:'6_5',valor:5,respuesta:'Siempre',selected:false},
                      ]
                  },
                    {
                        numero:7,
                        pregunta:'¿Con que frecuencia siente que en su vida hay un sentir de vacío?',
                        respuestas:[
                            {id:'7_1',valor:1,respuesta:'Nunca',selected:false},
                            {id:'7_2',valor:2,respuesta:'Casi nunca',selected:false},
                            {id:'7_3',valor:3,respuesta:'A veces',selected:false},
                            {id:'7_4',valor:4,respuesta:'Casi siempre',selected:false},
                            {id:'7_5',valor:5,respuesta:'Siempre',selected:false},
                        ]
                    },
                    {
                        numero:8,
                        pregunta:'¿Con qué frecuencia ha sentido coraje porque las cosas están fuera de su control?',
                        respuestas:[
                            {id:'8_1',valor:1,respuesta:'Nunca',selected:false},
                            {id:'8_2',valor:2,respuesta:'Casi nunca',selected:false},
                            {id:'8_3',valor:3,respuesta:'A veces',selected:false},
                            {id:'8_4',valor:4,respuesta:'Casi siempre',selected:false},
                            {id:'8_5',valor:5,respuesta:'Siempre',selected:false},
                        ]
                    },
                    {
                        numero:9,
                        pregunta:'¿Con qué frecuencia piensa en las cosas que no ha terminado (pendientes de hacer)?',
                        respuestas:[
                            {id:'9_1',valor:1,respuesta:'Nunca',selected:false},
                            {id:'9_2',valor:2,respuesta:'Casi nunca',selected:false},
                            {id:'9_3',valor:3,respuesta:'A veces',selected:false},
                            {id:'9_4',valor:4,respuesta:'Casi siempre',selected:false},
                            {id:'9_5',valor:5,respuesta:'Siempre',selected:false},
                        ]
                    },
                    {
                        numero:10,
                        pregunta:'¿Con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?',
                        respuestas:[
                            {id:'10_1',valor:1,respuesta:'Nunca',selected:false},
                            {id:'11_2',valor:2,respuesta:'Casi nunca',selected:false},
                            {id:'12_3',valor:3,respuesta:'A veces',selected:false},
                            {id:'13_4',valor:4,respuesta:'Casi siempre',selected:false},
                            {id:'14_5',valor:5,respuesta:'Siempre',selected:false},
                        ]
                    }
                ]
              },
              {numero:2,active:false,completado:false}
            ]
          },
          {
            numero:3,
            nombre:'Ejecutar',
            active:false,
            completado:false,
            secciones:[
              {
                numero:1,
                active:false,
                completado:false,
                preguntas:[
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},
                  {respuesta:''},

                ]
              }
            ]
          },
          {
            numero:4,
            nombre:'Consejos Genéricos',
            active:false,
            completado:false,
            secciones:[
              {numero:1,active:false,completado:false},
              {numero:2,active:false,completado:false}
            ]
          },
          {
            numero:5,
            nombre:'Curso Terminado',
            active:false,
            completado:false,
            secciones:[
              {numero:1,active:false,completado:false}
            ]
          },
        ],
        tema_actual:1
      }
    },
    mutations: {
      setCurso(state,curso){
        state.curso=curso;
      }
    },
    actions: {
      Consultar_Info_Firebase(context){
        firebase.firestore().collection('curso')
        .doc(context.state.curso.idfirebase)
        .get()  
        .then(function(doc){
          if (doc.exists) {
            var datos = doc.data();
            if(datos.reglas_aceptadas && 
            datos.informacion_llenada && 
            datos.usuario.estudiante_uanl!=null &&
            datos.usuario.trabajo!=null){
              for (var i = 0; i < datos.temas.length; i++) {
                datos.temas[i].active=false;
                for (var x = 0; x < datos.temas[i].secciones.length; x++) {
                  datos.temas[i].secciones[x].active=false;
                }
              }
              datos.temas[0].active=true;
              datos.temas[0].secciones[0].active=true;
              context.commit('setCurso',datos);
            }else{
              context.commit('setCurso',doc.data());
            } 
            context.commit('Guardar_En_LocalStorage');
          } else {
            context.commit('setCurso',JSON.parse(localStorage.cursouanlestres2020));
          }
        })
        .catch(error=>{
          context.commit('setCurso',JSON.parse(localStorage.cursouanlestres2020));
        });
      },
      Crear_Sesion_Firebase(context){
        context.state.curso.fecha=firebase.firestore.FieldValue.serverTimestamp();
        firebase.firestore().collection('curso')
        .add(context.state.curso)
        .then(refDoc => {
          console.log(refDoc.id);
          context.state.curso.idfirebase=refDoc.id;
          localStorage.cursouanlestres2020=JSON.stringify(context.state.curso);
          context.dispatch('Guardar_En_Firebase');
        })
        .catch(error => {
          context.state.curso.idfirebase=null;
          localStorage.cursouanlestres2020=JSON.stringify(context.state.curso);
        })
      },
      Guardar_En_Firebase(context,recargar){
        firebase.firestore().collection('curso')
        .doc(context.state.curso.idfirebase)
        .set(context.state.curso)
        .then(function(snapshot){
          if (recargar=='si') {
            location.reload();
          }
        });
      },
      Guardar_En_LocalStorage(context){
        localStorage.cursouanlestres2020=JSON.stringify(context.state.curso);
      },
      LocalStorage_Avance(context){
        if (!localStorage.getItem('cursouanlestres2020') || localStorage.getItem('cursouanlestres2020')=='undefined' || localStorage.getItem('cursouanlestres2020')==undefined) {          
          context.dispatch('Crear_Sesion_Firebase');
        }else{
          var curso = JSON.parse(localStorage.cursouanlestres2020);
          if (curso.idfirebase==null) {
            context.dispatch('Crear_Sesion_Firebase');
          }else{
            context.commit('setCurso',JSON.parse(localStorage.cursouanlestres2020));
            context.dispatch('Consultar_Info_Firebase');
          }
        }
      },
      Seccion_Completada(context,data){
        for (var i = 0; i < context.state.curso.temas.length; i++) {
          if (context.state.curso.temas[i].numero==data.numero_tema) {
            for (var x = 0; x < context.state.curso.temas[i].secciones.length; x++) {
              if (context.state.curso.temas[i].secciones[x].numero==data.numero_seccion) {
                context.state.curso.temas[i].secciones[x].completado=true;
                if (context.state.curso.temas[i].secciones[x].numero==context.state.curso.temas[i].secciones.length) {
                  context.state.curso.temas[i].completado=true;
                }
                localStorage.cursouanlestres2020=JSON.stringify(context.state.curso);        
              }
            }
          }
        }
      },
      Consultar_Cia(context){
        Vue.http.get('cia')
        .then(respuesta=>{return respuesta.json()})
        .then(respuestaJson=>{
          if (respuestaJson.length>0) {
            context.commit('setCia',respuestaJson[0]);
          }
        })
        .catch(error=>{
          
        });
      },
    },
    getters: { 
      getCurso(state){
        return state.curso;
      },
    },
    
}