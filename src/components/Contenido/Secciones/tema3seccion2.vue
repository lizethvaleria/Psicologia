<template>
  <div>
    <div class="card-header">
      <div class="media align-items-center">
        <div class="media-body">
          <h4 class="card-title">
            2. Autocontrol
          </h4>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          Has escuchado la frase: “Piensa antes de actuar”, me imagino que si y
          en varias ocasiones. Tener autocontrol implica reflexionar y dominar
          nuestras emociones y sentimientos. Reconocer cuando un sentimiento
          será pasajero, vaya expresar nuestras emociones sean estas positivas o
          negativas de forma adecuada. Te invito a realizar el siguiente
          ejercicio con el fin de comprender este punto.
        </div>
        <br />

        <div class="col-12 mt-3 text-center">
          <b>Ejercicio SPECC:</b> Situación – Pensamiento - Emoción- Conducta
          -Consecuencia.
        </div>
        <br />
        <br />
      </div>
      <div class="col-12 mt-3 text-center">
        <b>Paso 1.</b> Elabora los dos siguientes cuadrantes alusivos a la
        herramienta - SPECC.
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
        <div class="col-12 text-center">
          En sí, el autocontrol no es hacer lo que siento, es elegir qué hacer
          con lo que siento.
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
  name: "tema3seccion2",
  methods: {
    Crear_PDF() {
      downloadPreguntasPDF(
        "SPECC Situación – Pensamiento - Emoción- Conducta -Consecuencia",
        this.preguntas,
        "tema3_seccion2.pdf"
      );
    }
  },
  data() {
    return {
      preguntas: this.$store.getters.getCurso.temas[2].secciones[1].preguntas
    };
  }
};
</script>
