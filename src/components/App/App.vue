<template>
  <div class="mdk-header-layout js-mdk-header-layout">
    <headerview></headerview>
    <div
      v-if="!curso.informacion_llenada"
      class="row mt-5 pt-5 justify-content-center"
    >
      <div v-if="!curso.reglas_aceptadas">
        <div class="col-12 mt-3 text-center">
          <h3>Mensaje del Rector</h3>
        </div>
        <div class="col-12 text-center center ">
          <p>
            Es un gusto saludarte en esta ocasión por este medio y a su vez
            deseo reconocer tu gran esfuerzo y dedicación por llevar a cabo muy
            puntualmente el programa DIME (Desarrollo Integral del Manejo
            Emocional), el cual es una valiosa oportunidad para contribuir con
            tu plan de vida y carrera. Eres nuestra razón de SER y es por ello
            que creamos este programa para ti, ya que deseamos acompañarte en
            esta etapa socio-afectiva, que resulta esencial para enfrentar y
            resolver conflictos propios de tu edad y venideros en un futuro. El
            <b><i>Seminario de Counseling Virtual DIME</i></b
            >, es una plataforma de 6 horas (tu elijes tu ritmo) que te
            permitirá el desarrollo de habilidades intra e interpersonales, por
            mencionarte algunas: comunicación asertiva de sentimientos e ideas,
            crear situaciones de calma, optimismo, comprender mejor a los otros
            y a ti mismo, tomar decisiones más responsables, entre otras más.
            Para ello comprenderás, aplicarás y descubrirás las competencias
            centrales de la inteligencia emocional como lo son:
            <b
              ><i
                >Autoconocimiento, Autocontrol, Automotivación, Empatía y
                Habilidades Sociales.</i
              ></b
            >
          </p>

          <p>
            Estoy convencido que en tu interior hay algo muy grande que vencerá
            cualquier obstáculo, porque empezarás a creer aún más en ti y
            desarrollarás aún más tu capacidad de resiliencia.
          </p>
          <strong
            ><h4>
              No te detengas, transfórmate y trasciende.
            </h4></strong
          >
          <strong><h4>Ing. Rogelio G. Garza Rivera.</h4></strong>
          <h5>Rector</h5>
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
              <div class="row justify-content-center">
                <div class="col-md-10 mt-5">
                  <div class="row justify-content-center">
                    <div
                      class="col-8 col-md-10"
                      v-if="
                        curso.usuario.estudiante_uanl == 'si' ||
                          curso.usuario.estudiante_uanl == 'egresado'
                      "
                    >
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
                          <option value="Preparatoria10"
                            >Preparatoria 10</option
                          >
                          <option value="Preparatoria11"
                            >Preparatoria 11</option
                          >
                          <option value="Preparatoria12"
                            >Preparatoria 12</option
                          >
                          <option value="Preparatoria13"
                            >Preparatoria 13</option
                          >
                          <option value="Preparatoria14"
                            >Preparatoria 14</option
                          >
                          <option value="Preparatoria15"
                            >Preparatoria 15</option
                          >
                          <option value="Preparatoria16"
                            >Preparatoria 16</option
                          >
                          <option value="Preparatoria17"
                            >Preparatoria 17</option
                          >
                          <option value="Preparatoria18"
                            >Preparatoria 18</option
                          >
                          <option value="Preparatoria19"
                            >Preparatoria 19</option
                          >
                          <option value="Preparatoria20"
                            >Preparatoria 20</option
                          >
                          <option value="Preparatoria21"
                            >Preparatoria 21</option
                          >
                          <option value="Preparatoria22"
                            >Preparatoria 22</option
                          >
                          <option value="Preparatoria23"
                            >Preparatoria 23</option
                          >
                          <option value="Preparatoria24"
                            >Preparatoria 24</option
                          >
                          <option value="Preparatoria25"
                            >Preparatoria 25</option
                          >
                          <option value="AlvaroObregon"
                            >Escuela Industrial y Preparatoria Técnica "Álvaro
                            Obregón"</option
                          >
                          <option value="CIDEB"
                            >Centro de Investigación y Desarrollo en Educación
                            Bilingüe CIDEB</option
                          >
                          <option value="PabloLivas"
                            >Escuela Industrial y Preparatoria Técnica "Pablo
                            Livas"</option
                          >
                          <option value="TecnicaMedica"
                            >Escuela y Preparatoria Técnica Médica</option
                          >
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10 mt-5">
                  <div class="row justify-content-center">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="input"
                        aria-describedby="emailHelp"
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
    contenidoview: ContenidoView
  },
  data() {
    return {
      time: 60,
      timer: null,
      continuar: true
    };
  },
  mounted() {
    this.Video_Visto();
  },
  methods: {
    Video_Visto() {
      this.curso.video_rector = true;
      this.curso.reglas_aceptadas = false;
      this.Guardar_En_LocalStorage();
      //this.Guardar_En_Firebase();
    },
    Comenzar() {
      this.curso.reglas_aceptadas = true;
      this.Guardar_En_LocalStorage();
      //this.Guardar_En_Firebase();
    },
    Continuar() {
      const emailIsValid = email => {
        const expression = /\S+@\S+\.\S+/;
        return expression.test(email.toLowerCase());
      };

      if (
        !(
          this.curso.usuario.estudiante_uanl &&
          emailIsValid(this.curso.usuario.email)
        )
      ) {
        alert("Todos las preguntas son obligatorias");
      } else {
        $(".preloader").fadeIn();
        this.curso.informacion_llenada = true;
        this.Guardar_En_LocalStorage();
        this.Guardar_En_Firebase("si");
      }
    },
    ...mapActions([
      "LocalStorage_Avance",
      "Guardar_En_LocalStorage",
      "Guardar_En_Firebase"
    ])
  },
  computed: {
    curso() {
      return this.$store.getters.getCurso;
    }
  }
};
</script>

<style>
video {
  width: 100%;
  height: auto;
}
</style>
