<template>
  <div class="mdk-header-layout js-mdk-header-layout">
    <headerview></headerview>
    <div
      v-if="!curso.informacion_llenada"
      class="row mt-5 pt-5 justify-content-center"
    >
      <div v-if="!curso.video_rector">
        <div class="embed-container">
          <iframe
            src="https://www.youtube.com/embed/oXXTq3N5_pU"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="row justify-content-end mt-1 mr-2">
          <h6 v-if="time !== 0">
            Podrás saltar este video en {{ time }} segundos...
          </h6>
          <button
            v-else
            type="button"
            class="btn btn-success"
            @click="MarkVideoAsSeen"
          >
            Continuar
          </button>
        </div>
      </div>
      <div v-else-if="!curso.reglas_aceptadas">
        <div class="row mt-5 justify-content-center">
          <h3>Mensaje del Rector</h3>
        </div>
        <div class="row text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-10 col-md-12">
                <p>
                  Es un gusto saludarte en esta ocasión por este medio y a su
                  vez deseo reconocer tu gran esfuerzo y dedicación por llevar a
                  cabo muy puntualmente el programa DIME (Desarrollo Integral
                  del Manejo Emocional), el cual es una valiosa oportunidad para
                  contribuir con tu plan de vida y carrera. Eres nuestra razón
                  de SER y es por ello que creamos este programa para ti, ya que
                  deseamos acompañarte en esta etapa socio-afectiva, que resulta
                  esencial para enfrentar y resolver conflictos propios de tu
                  edad y venideros en un futuro. El
                  <b><i>Seminario de Counseling Virtual DIME</i></b
                  >, es una plataforma de 6 horas (tu elijes tu ritmo) que te
                  permitirá el desarrollo de habilidades intra e
                  interpersonales, por mencionarte algunas: comunicación
                  asertiva de sentimientos e ideas, crear situaciones de calma,
                  optimismo, comprender mejor a los otros y a ti mismo, tomar
                  decisiones más responsables, entre otras más. Para ello
                  comprenderás, aplicarás y descubrirás las competencias
                  centrales de la inteligencia emocional como lo son:
                  <b
                    ><i
                      >Autoconocimiento, Autocontrol, Automotivación, Empatía y
                      Habilidades Sociales.</i
                    ></b
                  >
                </p>
                <p>
                  Estoy convencido que en tu interior hay algo muy grande que
                  vencerá cualquier obstáculo, porque empezarás a creer aún más
                  en ti y desarrollarás aún más tu capacidad de resiliencia.
                </p>
              </div>
            </div>
            <div class="row justify-content-center">
              <h4 class="m-2 p-2">
                <strong> No te detengas, transfórmate y trasciende. </strong>
              </h4>
            </div>
            <div class="row justify-content-center">
              <h4 class="m-2">
                <strong>Ing. Rogelio G. Garza Rivera.</strong>
              </h4>
            </div>
            <div class="row justify-content-center">
              <h5>Rector</h5>
            </div>
          </div>
        </div>

        <div
          class="col-12 mt-5 mb-5 text-center"
          v-if="!curso.reglas_aceptadas"
        >
          <a href="" v-on:click.prevent="Comenzar" class="btn btn-success"
            >Comenzar</a
          >
        </div>
      </div>
      <div v-else class="row mt-5 pt-5 justify-content-center">
        <div class="col-12 mt-3 text-center">
          <h3>Información Básica</h3>
        </div>
        <div class="col-lg-8 col-12 mt-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row justify-content-center">
                <div>
                  <div class="row">
                    <div class="col-12 text-center">
                      ¿Eres estudiante de la UANL?
                    </div>
                    <div class="col-12 mt-2 text-center">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="estudiante_uanl"
                          id="si_estudiante_uanl"
                          v-model="curso.usuario.estudiante_uanl"
                          value="si"
                        />
                        <label class="form-check-label" for="si_estudiante_uanl"
                          >Si</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="estudiante_uanl"
                          id="no_estudiante_uanl"
                          v-model="curso.usuario.estudiante_uanl"
                          value="no"
                        />
                        <label class="form-check-label" for="no_estudiante_uanl"
                          >No</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="estudiante_uanl"
                          id="egresado_estudiante_uanl"
                          v-model="curso.usuario.estudiante_uanl"
                          value="egresado"
                        />
                        <label
                          class="form-check-label"
                          for="egresado_estudiante_uanl"
                          >Egresado</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="
                  ['si', 'egresado'].indexOf(curso.usuario.estudiante_uanl) >= 0
                "
                class="row justify-content-center"
              >
                <div class="col-md-10 mt-5">
                  <div class="row justify-content-center">
                    <div class="col-8 col-md-10">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="preparatoria"
                            >Preparatoria</label
                          >
                        </div>
                        <select
                          class="custom-select"
                          v-model="curso.usuario.preparatoria"
                          id="preparatoria"
                        >
                          <option value="Preparatoria1">Preparatoria 1</option>
                          <option value="Preparatoria2">Preparatoria 2</option>
                          <option value="Preparatoria3">Preparatoria 3</option>
                          <option value="Preparatoria4">Preparatoria 4</option>
                          <option value="Preparatoria5">Preparatoria 5</option>
                          <option value="Preparatoria6">Preparatoria 6</option>
                          <option value="Preparatoria7">Preparatoria 7</option>
                          <option value="Preparatoria8">Preparatoria 8</option>
                          <option value="Preparatoria9">Preparatoria 9</option>
                          <option value="Preparatoria10">
                            Preparatoria 10
                          </option>
                          <option value="Preparatoria11">
                            Preparatoria 11
                          </option>
                          <option value="Preparatoria12">
                            Preparatoria 12
                          </option>
                          <option value="Preparatoria13">
                            Preparatoria 13
                          </option>
                          <option value="Preparatoria14">
                            Preparatoria 14
                          </option>
                          <option value="Preparatoria15">
                            Preparatoria 15
                          </option>
                          <option value="Preparatoria16">
                            Preparatoria 16
                          </option>
                          <option value="Preparatoria17">
                            Preparatoria 17
                          </option>
                          <option value="Preparatoria18">
                            Preparatoria 18
                          </option>
                          <option value="Preparatoria19">
                            Preparatoria 19
                          </option>
                          <option value="Preparatoria20">
                            Preparatoria 20
                          </option>
                          <option value="Preparatoria21">
                            Preparatoria 21
                          </option>
                          <option value="Preparatoria22">
                            Preparatoria 22
                          </option>
                          <option value="Preparatoria23">
                            Preparatoria 23
                          </option>
                          <option value="Preparatoria24">
                            Preparatoria 24
                          </option>
                          <option value="Preparatoria25">
                            Preparatoria 25
                          </option>
                          <option value="AlvaroObregon">
                            Escuela Industrial y Preparatoria Técnica "Álvaro
                            Obregón"
                          </option>
                          <option value="CIDEB">
                            Centro de Investigación y Desarrollo en Educación
                            Bilingüe CIDEB
                          </option>
                          <option value="PabloLivas">
                            Escuela Industrial y Preparatoria Técnica "Pablo
                            Livas"
                          </option>
                          <option value="TecnicaMedica">
                            Escuela y Preparatoria Técnica Médica
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-10 mt-5">
                  <div class="row justify-content-center">
                    <div class="form-group">
                      <label for="matricula">Matrícula</label>
                      <input
                        type="text"
                        class="form-control"
                        id="matricula"
                        placeholder="Ingrese matrícula"
                        v-model="curso.usuario.matricula"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10 mt-5">
                  <div class="row justify-content-center">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Ingrese email"
                        v-model="curso.usuario.email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5 mb-5 text-center">
          <a href="" v-on:click.prevent="Continuar" class="btn btn-success"
            >Continuar</a
          >
        </div>
      </div>
    </div>
    <contenidoview v-else></contenidoview>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderView from "@/components/Header/Header.vue";
import ContenidoView from "@/components/Contenido/Contenido.vue";
export default {
  components: {
    headerview: HeaderView,
    contenidoview: ContenidoView,
  },
  data() {
    return {
      time: 30,
      timer: null,
      continuar: true,
      curso: this.$store.getters.getCurso,
    };
  },
  mounted() {
    if (!this.curso.video_rector) {
      const that = this;
      const interval = setInterval(() => {
        that.time = that.time - 1;
        if (that.time === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  },
  methods: {
    MarkVideoAsSeen() {
      this.curso.video_rector = true;
      this.setCurso(this.curso);
      this.actualizarEnFirestore();
    },
    Comenzar() {
      this.curso.reglas_aceptadas = true;
      this.setCurso(this.curso);
    },
    Continuar() {
      const validateEmail = (email) => {
        const expression = /\S+@\S+\.\S+/;
        return expression.test(email.toLowerCase());
      };

      const validateMatricula = (matricula) => {
        const expression = /^\d+$/;
        return expression.test(matricula) && matricula.length === 7;
      };

      if (
        validateEmail(this.curso.usuario.email) &&
        (this.curso.usuario.estudiante_uanl === "no" ||
          (this.curso.usuario.estudiante_uanl &&
            validateMatricula(this.curso.usuario.matricula) &&
            this.curso.usuario.preparatoria))
      ) {
        this.curso.informacion_llenada = true;
        this.setCurso(this.curso);
        $(".preloader").fadeIn();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert(
          "Todos las preguntas son obligatorias.\nAsegúrese de ingresar un email y matrícula válidos."
        );
      }
    },
    ...mapActions(["setCurso", "actualizarEnFirestore"]),
  },
};
</script>

<style scoped>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  min-width: 80vw;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
