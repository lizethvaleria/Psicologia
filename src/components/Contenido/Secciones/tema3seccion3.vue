<template>
  <div>
    <div class="card-header">
      <div class="media align-items-center">
        <div class="media-body">
          <h4 class="card-title">
            3. Automotivación
          </h4>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          Es decir, que tus emociones o sentimientos se enfoquen a la creación
          de nuevas metas y logros. Para ello ocupas optimismo e iniciativa,
          aunque en ocasiones el contexto no sea favorable. A continuación, el
          siguiente ejercicio te ayuda a profundizar en este punto.
        </div>
        <br />
        <br />
        <br />
        <div class="col-12 mt3 text-center">
          <b>Ejercicio: Mi árbol de logros.</b>
        </div>
      </div>
      <div class="col-12 mt-3 text-center">
        <b>Paso 1.</b> Desarrollo el modelo mi árbol de logros.
      </div>

      <div align="center">
        <img src="../../../img/automotivacion.png" width="400" height="400" />
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
  name: "tema3seccion3",
  methods: {
    Crear_PDF() {
      downloadPreguntasPDF(
        "Mi árbol de logros",
        this.preguntas,
        "tema3_seccion3.pdf"
      );
    }
  },
  data() {
    return {
      preguntas: this.$store.getters.getCurso.temas[2].secciones[2].preguntas
    };
  }
};
</script>
