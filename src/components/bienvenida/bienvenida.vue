<template>
 <div id="bienvenida"  class="MensajeBienvenida d-flex flex-column justify-content-center align-items-center bg-white w-100 h-100">
       <div :class="user ? 'd-none' : ''">
     <div>
      <h1 class="ml1">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">Seminario de Counseling Virtual DIME</span>
          <span class="line line2"></span>
        </span>
      </h1>
    </div>
    <div class="m-2">
      <h1 class="ml11">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">Desarrollo Integral del Manejo Emocional</span>
        </span>
      </h1>
      </div>
       
     <div class="row mt-3">
                <div class="col-12 text-center">
                  <button v-on:click.prevent="Curso" href="C:\Users\STI\Psicologia\src\components\App\App.vue" class="btn btn-sm btn-success text-white">
                    Ir al Curso
                  </button>
                </div>
              </div>
       </div>
    <button
      v-on:click="
        () => {
          cerrarBienvenida();
        
        }
      "
      class="btn comenzar-btn opacity-0"
    >
      Comenzar
    </button>
</div>
</template>
<script>
import { mapState } from "vuex";
import bienvenidaView from "@/components/bienvenida/bienvenida.vue";
export default {
     components:{
    bienvenidaView:bienvenidaView
  },
   data(){
    return {
    }
  },
  methods:{
    Curso(){
      this.$router.push({name:'Curso'});
      location.reload();
    }
  },
  
  computed:{
    
  },

  mounted() {
    let comenzarBoton = document.querySelector(".comenzar-btn");
    var textWrapper = document.querySelector(".ml1 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i),
      });
  
    // Desvaecer bienvenida a los 2.3 segundos
    // let MensajeBienvenidaEl = document.querySelector(".MensajeBienvenida");
    // setTimeout(() => {
    //   MensajeBienvenidaEl.classList.remove("bg-white");
    //   textWrapper.classList.add("opacity-0");
    //   setTimeout(() => {
    //     MensajeBienvenidaEl.classList.add("negativeZIndex");
    //   }, 1000);
    // }, 2300);
    // Texto secundario
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        delay: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: ".ml11",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
    setTimeout(() => {
      let textoBienvenida = document.querySelector(".texto-bienvenida");
      comenzarBoton.classList.add("opacity-1");
      comenzarBoton.classList.remove("opacity-0");
      textoBienvenida.classList.add("opacity-1");
      textoBienvenida.classList.remove("opacity-0");
    }, 3000);
  },
};
</script>
<style>
.MensajeBienvenida {
  transition: all 1s ease-out;
  z-index: 999999;
  position: absolute;
  left: 0;
  top: 0;
  color:#004a8f;
  text-align: center;
}
.negativeZIndex {
  z-index: -1 !important;
}
.ml1 {
  font-weight: 900;
  font-size: 3.5em;
}
.ml1 .letter {
  display: inline-block;
  line-height: 1em;
}
.ml1 .text-wrapper {
  transition: opacity 1s ease-out;
  max-width: 90vw;
}
.ml1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}
.ml1 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color:#fbc43d;
  transform-origin: 0 0;
}
.ml1 .line1 {
  top: 0;
}
.ml1 .line2 {
  bottom: 0;
}
.ml11 {
  font-weight: 700;
  font-size: 1.5em;
}
.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}
.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}
.ml11 .line1 {
  top: 0;
  left: 0;
}
.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
.comenzar-btn {
  transition: all 0.3s ease-in-out;
  background: #004a8f;
  border-radius: 0;
  color: white !important;
  margin-top: 1em;
}
.texto-bienvenida {
  transition: all 0.3s ease-in-out;
}
.opacity-1 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
}
@media (max-width: 500px) {
  .ml1 {
    font-size: 2em;
  }
  .ml11 {
    font-size: 1em;
  }
}
</style>

