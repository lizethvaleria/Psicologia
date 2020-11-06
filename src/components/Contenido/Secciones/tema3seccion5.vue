<template>
  <div>
    <div class="card-header">
      <div class="media align-items-center">
        <div class="media-body">
          <h4 class="card-title">
            5. Habilidades sociales
          </h4>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          Los humanos somos seres sociales por naturaleza, sin embargo,
          socializamos de diversas formas. Tener buenas relaciones sociales nos
          ayuda a sentirnos parte de un rol o grupo. No es sencillo socializar,
          aunque parezca fácil para algunos. Socializar implica interactuar con
          situaciones que nos agradan y otras que no. Para afianzar este este
          punto elabora el siguiente ejercicio:
        </div>
        <br />
        <br />
        <br />
        <div class="col-12 mt3 text-center">
          <b>Ejercicio: La ley de mi espejo.</b>
        </div>
      </div>

      <div class="col-12 mt-3 text-center">
        <b>Paso 1.</b> Desarrolla tu propia ley del espejo, por favor se
        honesto. ¡No te falles a ti mismo!
      </div>
      <br />
      <br />
      <div align="center">
        <img src="../../../img/ley.png" width="400" height="300" />
      </div>
      <div class="row mt-5">
        <div
          :key="pregunta.mensaje"
          v-for="pregunta in preguntas"
          class="col-md-12 text-center form-group"
        >
          <label>
            {{ pregunta.mensaje }}
          </label>
          <textarea
            class="form-control respuesta_seccion3"
            v-model="pregunta.respuesta"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-md-6 text-center">
          <button class="btn btn-success btn-block" v-on:click="Crear_PDF">
            Descargar Mi Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { downloadPreguntasPDF } from "@/services/jspdf";

export default {
  name: "tema3seccion5",
  methods: {
    Crear_PDF() {
      downloadPreguntasPDF(
        "La ley de mi espejo",
        this.preguntas,
        "tema3_seccion5.pdf"
      );
    }
  },
  data() {
    return {
      preguntas: this.$store.getters.getCurso.temas[2].secciones[4].preguntas
    };
  }
};
</script>
