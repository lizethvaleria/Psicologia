<template>
 <body id="page-top">

 
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="C:\Users\STI\Psicologia\src\components\img\page.jpg" alt="" /></a>
            </div>
            <div class="container">
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href=C:\Users\STI\Psicologia\src\components\App\App.vue>Tell Me More</a>
            </div>
 </body>
        <!-- Masthead-->
      
</template>
<script>
import { mapActions } from 'vuex';
export default {
  components:{
    contenidoview: ContenidoView
  },
  data(){
    return {
    }
  },
  methods:{
   '/' (){
      this.$router.push({name:'App'});
      location.reload();
    }
  },
  mounted(){
    
  },
  computed:{
    
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
.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #fec810;
  border-color: #fec503;
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #fec503;
  border-color: #f3bd01;
}
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(254, 216, 84, 0.5);
}
</style>