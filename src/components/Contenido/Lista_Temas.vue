<template>
    <div>
        <div class="sidebar-heading">Temas</div>
        <ul class="list-group list-group-fit" id="ul_temas">
            <li class="list-group-item tema_li" :class="{'active':tema.active}" v-for="tema of curso.temas">
                <a href="" v-on:click.prevent="Ir_Tema(tema)">
                    <span class="media align-items-center">
                        <span class="media-left">
                            <span class="btn btn-white btn-circle">{{'#'+tema.numero}}</span>
                        </span>
                        <span class="media-body">
                            {{tema.nombre}}
                        </span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data () {
        return {
          
        }
    },
    methods:{
        Ir_Tema(tema){
            if (tema.numero>1) {
                var pasar = false;
                var i_activo=0;
                for (var i = 0; i < this.curso.temas.length; i++) {
                    if (this.curso.temas[i].active) {
                        i_activo=i;
                    }
                    this.curso.temas[i].active=false;
                    if (this.curso.temas[i].numero==tema.numero) {
                        for (var x = 0; x < this.curso.temas[i].secciones.length; x++) {
                            this.curso.temas[i].secciones[x].active=false;
                            if (this.curso.temas[i-1].secciones[x].completado) {
                                this.curso.temas[i].active=true;
                                this.curso.temas[i].secciones[x].active=true;
                                pasar = true;
                            }
                        } 
                    }
                }
                if (pasar) {
                    this.$emit('CambiarTema');
                }else{
                    alert('Primero debes acreditar el tema '+(tema.numero-1));
                    this.curso.temas[i_activo].active=true;
                }
            }else{
                for (var i = 0; i < this.curso.temas.length; i++) {
                    this.curso.temas[i].active=false;
                    for (var x = 0; x < this.curso.temas[i].secciones.length; x++) {
                        this.curso.temas[i].secciones[x].active=false;
                    }
                }
                this.curso.temas[0].active=true;
                this.curso.temas[0].secciones[0].active=true;
                this.$emit('CambiarTema');
            }
        },
        ...mapActions(['Seccion_Completada'])
    },
    computed:{
        curso(){
          return this.$store.getters.getCurso;
        }
    },
};
</script>

<style>
    .completed{
        background-color: #004A8F !important;
    }
</style>
