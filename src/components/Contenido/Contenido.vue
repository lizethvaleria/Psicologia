<template>
  <div class="mdk-header-layout__content mt-5 pt-3">
    <div
      data-push
      data-responsive-width="992px"
      class="mdk-drawer-layout js-mdk-drawer-layout"
    >
      <div class="mdk-drawer-layout__content page ">
        <div class="container-fluid page__container px-0 px-md-3">
          <div v-if="tema_actual" class="card-group justify-content-center">
            <div class="col-12 text-center">
              <h4>Zona {{ tema_actual.numero }}. {{ tema_actual.nombre }}</h4>
            </div>
            <div class="stepwizard col-12">
              <div class="stepwizard-row setup-panel">
                <div
                  class="stepwizard-step"
                  :key="seccion.numero"
                  v-for="seccion of tema_actual.secciones"
                >
                  <a
                    href=""
                    v-on:click.prevent="Ir_A_Seccion(seccion)"
                    type="button"
                    class="btn btn-circle text-white"
                    style="background-color: rgba(0, 74, 143, 0.92) !important;"
                    v-if="seccion.active"
                  >
                    {{ seccion.numero }}
                  </a>
                  <a
                    href=""
                    v-on:click.prevent="Ir_A_Seccion(seccion)"
                    type="button"
                    class="btn btn-circle btn-primary"
                    v-else-if="seccion.completado"
                  >
                    {{ seccion.numero }}
                  </a>
                  <a
                    href=""
                    v-on:click.prevent="() => {}"
                    type="button"
                    class="btn btn-circle btn-default "
                    v-else
                  >
                    {{ seccion.numero }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <tema1seccion1 v-if="componente == '1_1'"></tema1seccion1>
            <tema2seccion1 v-if="componente == '2_1'"></tema2seccion1>
            <tema3seccion1 v-if="componente == '3_1'"></tema3seccion1>
            <tema3seccion2 v-if="componente == '3_2'"></tema3seccion2>
            <tema3seccion3 v-if="componente == '3_3'"></tema3seccion3>
            <tema3seccion4 v-if="componente == '3_4'"></tema3seccion4>
            <tema3seccion5 v-if="componente == '3_5'"></tema3seccion5>
            <tema4seccion1
              @CambiarActivo="Colocar_Seccion_Actual_Al_Cargar_La_Pagina"
              v-if="componente == '4_1'"
            ></tema4seccion1>
            <div class="card-footer">
              <a
                href=""
                v-on:click.prevent="Regresar"
                class="btn btn-primary"
                v-if="
                  componente != '1_1' &&
                    componente != '2_1' &&
                    componente != '3_1' &&
                    componente != '4_1'
                "
              >
                <i class="material-icons btn__icon--right mr-1"
                  >keyboard_backspace</i
                >
                Regresar
              </a>
              <a
                href=""
                v-show="componente != '4_1'"
                v-on:click.prevent="Continuar"
                class="btn btn-primary float-right"
              >
                Continuar
                <i class="material-icons btn__icon--right">play_arrow</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mdk-drawer js-mdk-drawer" data-align="end">
        <div class="mdk-drawer__content ">
          <div
            class="sidebar sidebar-right sidebar-light bg-white o-hidden"
            data-perfect-scrollbar
          >
            <div class="sidebar-p-y">
              <contadorview></contadorview>
              <listatemasview
                @CambiarTema="Colocar_Seccion"
              ></listatemasview>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Tema1Seccion1 from "./Secciones/tema1seccion1.vue";
import Tema2Seccion1 from "./Secciones/tema2seccion1.vue";
import Tema3Seccion1 from "./Secciones/tema3seccion1.vue";
import Tema3Seccion2 from "./Secciones/tema3seccion2.vue";
import Tema3Seccion3 from "./Secciones/tema3seccion3.vue";
import Tema3Seccion4 from "./Secciones/tema3seccion4.vue";
import Tema3Seccion5 from "./Secciones/tema3seccion5.vue";
import Tema4Seccion1 from "./Secciones/tema4seccion1.vue";
import ContadorView from "./Contador.vue";
import ListaTemasView from "./Lista_Temas.vue";
export default {
  components: {
    tema1seccion1: Tema1Seccion1,
    tema2seccion1: Tema2Seccion1,
    tema3seccion1: Tema3Seccion1,
    tema3seccion2: Tema3Seccion2,
    tema3seccion3: Tema3Seccion3,
    tema3seccion4: Tema3Seccion4,
    tema3seccion5: Tema3Seccion5,
    tema4seccion1: Tema4Seccion1,
    contadorview: ContadorView,
    listatemasview: ListaTemasView
  },
  data() {
    return {
      tema_actual: null,
      seccion_actual: {
        componente: "1_1",
        numero_tema: 1,
        numero_seccion: 1
      },
      curso: this.$store.getters.getCurso,
      componente: "1_1"
    };
  },
  methods: {
    Continuar() {
      const seccionActiva = this.curso.temas[this.curso.tema_actual - 1]
        .secciones[this.curso.seccion_actual - 1];
      if (this.Validar(seccionActiva)) {
        this.setCurso(this.curso);
        this.avanzarSeccion();
        this.curso = this.$store.getters.getCurso;

        this.Colocar_Seccion();
        window.scrollTo(0, 0);
      } else {
        alert("Todos las preguntas son obligatorias");
      }
    },
    Validar(seccion) {
      if (seccion.preguntas) {
        console.log("validando respuestas");
        const preguntasConRespuestaVacia = seccion.preguntas.filter(p => !p.respuesta);
        console.log("Preguntas sin respuesta: ", preguntasConRespuestaVacia);
        const isValid = seccion.preguntas.filter(p => !p.respuesta).length === 0;
        return isValid;
      }
      return true;
    },
    Regresar() {
      var siguiente_tema = this.seccion_actual.numero_tema;
      var siguiente_seccion = this.seccion_actual.numero_seccion - 1;
      this.seccion_actual.componente = siguiente_tema + "_" + siguiente_seccion;
      this.seccion_actual.numero_tema = siguiente_tema;
      this.seccion_actual.numero_seccion = siguiente_seccion;
      this.Colocar_Seccion_Actual();
    },
    Colocar_Seccion() {
      this.curso = this.$store.getters.getCurso;
      if (this.curso.finalizado) {
        this.componente = "4_1";
      } else {
        const temaActual = this.curso.temas[this.curso.tema_actual - 1];
        this.tema_actual = temaActual;
        const seccionActual = temaActual.secciones[this.curso.seccion_actual - 1];
        this.componente = `${this.curso.tema_actual}_${this.curso.seccion_actual}`;
      }
      console.log("Colocando seccion: ", this.componente);
    },
    ...mapActions(["setCurso", "avanzarSeccion"])
  },
  mounted() {
    this.Colocar_Seccion();
    // var that = this;
    // $(document).ready(function() {
    //   setTimeout(function() {
    //     console.log("That curso: ", that.curso);
    //     that.Colocar_Seccion(that.curso);
    //   }, 1000);
    // });
  }
};
</script>

<style>
.stepwizard-step p {
  margin-top: 10px;
}
.stepwizard-row {
  display: table-row;
}
.stepwizard {
  display: table;
  width: 50%;
  position: relative;
}
.stepwizard-step button[disabled] {
  opacity: 1 !important;
  filter: alpha(opacity=100) !important;
}
.stepwizard-row:before {
  top: 14px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 100%;
  height: 1px;
  background-color: #ccc;
  z-order: 0;
}
.stepwizard-step {
  display: table-cell;
  text-align: center;
  position: relative;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
</style>
