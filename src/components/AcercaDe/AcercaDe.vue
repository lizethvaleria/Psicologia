<template>
  <div class="mdk-header-layout js-mdk-header-layout">
    <headerview></headerview>
    <div class="mdk-header-layout__content mt-5 pt-3">
      <div data-push data-responsive-width="992px" class="mdk-drawer-layout js-mdk-drawer-layout">
          <div class="mdk-drawer-layout__content page ">
            <div class="container-fluid page__container px-lg-5 px-3 px-md-3">
              <div class="row mb-5 mt-3 px-lg-5 justify-content-center" >
              
                
                <div class="col-lg-8 px-lg-3 mt-1 text-center py-1 bg-warning text-dark">
                </div>
                <div class="col-lg-8 mt-5 text-center">
                  <h5><b>Rector:</b></h5>
                  <h6>Mtro. Rogelio G. Garza Rivera.</h6>
                </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Secretario General. </b></h5>
                  <h6>Dr. Santos Guzmán López.</h6>
                </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Secretaría Académica.</b></h5>
                  <h6> QFB. Emilia Vázquez Farías.</h6>
                </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Secretaría de Innovación y Desarrollo Digital. </b></h5>
                  <h6> Dr. Jaime Arturo Castillo Elizondo.</h6>
                 </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Facultad de Psicología.</b></h5>
                  <h6>Dr. Álvaro Antonio Ascary Aguillón Ramírez. </h6>
                  
                </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Facultad de Ingeniería Mecánica y Eléctrica.  </b></h5>
                  <h6>Dr. Arnulfo Treviño Cubero.</h6>
                </div>
               <div class="col-lg-8 mt-3 text-center">
                  <h5><b>	Directora del Sistema de Estudios del Nivel Medio Superior. </b></h5>
                  <h6>MC. Sandra Elizabeth Del Río Muñoz.  </h6>
                </div>
                <div class="col-lg-8 mt-3 text-center">
                  <h5><b>Desarrolladores:</b></h5>
                  <h6>Secretaria de TI FIME </h6>
                  
                </div>
                 <div class="col-lg-8 px-lg-3 mt-2 text-center py-1 bg-warning text-dark">
                </div>
               
              </div>
              <div class="row mt-3">
                <div class="col-12 text-center">
                  <button v-on:click.prevent="Curso" href="" class="btn btn-sm btn-success text-white">
                    Ir al Curso
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  
</template>

<script>
import { mapActions } from 'vuex';
import HeaderView     from '@/components/Header/Header.vue';
export default {
  components:{
    headerview:HeaderView
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
  mounted(){
    
  },
  computed:{
    
  },

};
</script>

<style>
video {
  width: 100%;
  height: auto;
}
</style>
