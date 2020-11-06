<template>
  <div>
    <div class="card-header">
      <div class="media align-items-center">
        <div class="media-left">
          <h4 class="mb-0"><strong>1</strong></h4>
        </div>
        <div class="media-body">
          <h4 class="card-title">
            El sendero de mis emociones
          </h4>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          A continuación, se abordarán de forma explicativa y práctica las 5
          capacidades para el manejo efectivo de las emociones:
        </div>
        <div class="col-12 mt-3 text">
          <b>1.Mi Autoconocimiento</b> Esta competencia es muy sencilla de
          entender, más no así su desarrollo ya que implica un viaje a nuestro
          interior y reconocer el buen o mal manejo de nuestras actuaciones en
          la cotidianidad de nuestra vida. Se debe hacer una reflexión profunda
          y honesta de nuestras emociones y sentimientos. Para comprender mejor
          este punto te invito a realizar el siguiente ejercicio.
        </div>
        <div class="col-12 mt3 text-center">
          <b>Ejercicio: Mis ventanas ante la vida.</b>
        </div>
      </div>
      <div class="col-12 mt-3 text-center">
        <b>Paso 1.</b> Desarrolla la siguiente matriz sobre las ventanas de mi
        vida.
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
          Conocerse a sí mismo implica tiempo y está presente a lo largo de la
          vida. No corras, es un aprendizaje de vida permanente y continua.
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
  name: "tema3seccion1",
  methods: {
    Crear_PDF() {
      downloadPreguntasPDF(
        "Mis ventanas ante la vida",
        this.preguntas,
        "tema3_seccion1.pdf"
      );
    }
  },
  data() {
    return {
      preguntas: this.$store.getters.getCurso.temas[2].secciones[0].preguntas
    };
  }
};
</script>
<style></style>
