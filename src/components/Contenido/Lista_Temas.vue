<template>
  <div>
    <div class="sidebar-heading">Temas</div>
    <ul class="list-group list-group-fit" id="ul_temas">
      <li
        class="list-group-item tema_li"
        :class="{ active: curso.tema_actual === tema.numero }"
        :key="tema.numero"
        v-for="tema of curso.temas"
      >
        <a href="" v-on:click.prevent="Ir_A_Tema(tema)">
          <span class="media align-items-center">
            <span class="media-left">
              <span class="btn btn-white btn-circle">{{
                "#" + tema.numero
              }}</span>
            </span>
            <span class="media-body">
              {{ tema.nombre }}
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      curso: this.$store.getters.getCurso
    };
  },
  methods: {
    IsTemaCompletado(numeroTema) {
      const temaContestado = numeroTema => {
        const tema = this.curso.temas[numeroTema - 1];
        const seccionesSinContestar = tema.secciones.filter(seccion =>
          seccion.preguntas
            ? seccion.preguntas.filter(pregunta => pregunta.respuesta)
                .length === 0
            : false
        );
        return seccionesSinContestar.length === 0;
      };

      return numeroTema === 1
        ? temaContestado(numeroTema)
        : temaContestado(numeroTema) && temaContestado(numeroTema - 1);
    },
    Ir_A_Tema(tema) {
      if (tema.numero == 1 || this.IsTemaCompletado(tema.numero - 1)) {
        this.curso.tema_actual = tema.numero;
        this.curso.seccion_actual = 1;
        this.curso.finalizado = false;
        this.setCurso(this.curso);
        this.$emit("CambiarTema");
      }
    },
    ...mapActions(["setCurso"])
  }
};
</script>

<style>
.completed {
  background-color: #004a8f !important;
}
</style>
