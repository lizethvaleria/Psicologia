<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
                <div class="media-left">
                    <h4 class="mb-0"><strong>1</strong></h4>
                </div>
                <div class="media-body">
                    <h4 class="card-title">
                        	Iniciando con inspiración, me supero con resiliencia. 
                    </h4>
                </div>
            </div>
        </div>
         
        <div class="card-body">
            <div class="row">
                <h4 class="card-title">
                        Ejercicio Mis Grietas Valen Oro.
                    </h4>
                <div class="col-12">
                    Paso 1. Reproduce y observa con atención el video: Mis grietas valen oro. 
                </div>
                 <div class="col-12">
                    Paso 2. Contesta la siguiente pregunta orientativa. 

                </div>
            
            </div>
        </div>
        <div class="card-body">
          
                <div class="video-responsive">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8XpeYHmhG0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                   <br>
                      <div class="card-body">
            <div class="row">
                <div class="col-12 form-group">
                    <label for="exampleFormControlTextarea1">
                        <b>¿Qué aprendizajes te deja el video “Mis grietas valen oro”? </b>
                    </label>
                    <textarea v-model="curso.temas[0].secciones[0].preguntas[0].respuesta" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'tema1seccion1',
    methods:{
        Validar() {
            this.curso.continuar = (this.curso.temas[0].secciones[0].preguntas[0].respuesta.length !== 0);
        }
    },
    mounted(){
        this.Validar();
    },
    updated() {
        this.Validar();
    },
    computed:{
        curso(){
          return this.$store.getters.getCurso;
        }
    }
};
</script>
<style>
</style>