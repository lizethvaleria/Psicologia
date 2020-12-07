<template>
  <div id="page-top" class="page-top bienvenida-container">
    <img class="img-bienvenida d-block" src="../img/page.jpg" alt="" />
    <a
      class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
      v-on:click="CambiarRuta"
      >Comenzar</a
    >
  </div>
  <!-- Masthead-->
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Bienvenida",
  methods: {
    CambiarRuta() {
      this.$router.push({ name: "App" });
      location.reload();
    },
  },
};
</script>
<style scoped>
.btn-primary {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:hover {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #fec503;
  border-color: #f3bd01;
}
.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
.img-bienvenida {
  width: max(60vw, 30em);
}
.bienvenida-container {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.js-scroll-trigger {
  margin-top: 2em;
}
</style>
