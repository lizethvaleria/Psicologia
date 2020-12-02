<template>
  <div>
    <div class="card-header">
      <div class="media align-items-center">
        <div class="media-left">
          <h4 class="mb-0"><strong>1</strong></h4>
        </div>
        <div class="media-body">
          <h4 class="card-title">
            Iniciando con inspiración, me supero con resiliencia.
          </h4>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="row">
        <h4 class="card-title">
          Ejercicio Mis Grietas Valen Oro.
        </h4>
        <div class="col-12">
          Paso 1. Reproduce y observa con atención el video: Mis grietas valen
          oro.
        </div>
        <div class="col-12">
          Paso 2. Contesta la siguiente pregunta orientativa.
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="video-responsive">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8XpeYHmhG0g"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div class="card-body">
        <div :key="pregunta.mensaje" v-for="pregunta in preguntas" class="row">
          <div class="col-12 form-group">
            <label for="exampleFormControlTextarea1">
              <b>{{ pregunta.mensaje }}</b>
            </label>
            <textarea
              v-model="pregunta.respuesta"
              class="form-control"
              id="exampleFormControlTextarea1"
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
  </div>
</template>

<script>
import { downloadPreguntasPDF } from "@/services/jspdf";

export default {
  name: "tema1seccion1",
  methods: {
    Crear_PDF() {
      downloadPreguntasPDF(
        "Mis Grietas Valen Oro",
        this.preguntas,
        "tema1_seccion1.pdf"
      );
    }
  },
  data() {
    return {
      preguntas: this.$store.getters.getCurso.temas[0].secciones[0].preguntas
    };
  }
};
</script>
<style></style>
