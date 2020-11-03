<template>
  
    <div id="header" class="mdk-header bg-dark js-mdk-header m-0" data-fixed data-effects="waterfall">
            <div class="mdk-header__content">

                <nav class="navbar navbar-expand-md navbar-dark blue_uanl m-0 p-md-0">
                    <div class="container-fluid">

                        <!-- Brand -->
                        <a href="#" class="navbar-brand">
                            Seminario de Counseling Virtual DIME
                        </a>
                        
                        <button class="navbar-toggler navbar-toggler-right mr-0" data-toggle="collapse" data-target="#navbarsExample03" type="button">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarsExample03">

                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="./../../">Cursos</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="./../../" class="nav-link">Instructores</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="" v-on:click.prevent="AcercaDe" class="nav-link">Acerca de</a>
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                </nav>

            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    AcercaDe(){
        this.$router.push({name:'AcercaDe'});
    },
    Login(){
        this.$router.push({name:'Login'});
    }
  }
};
</script>
