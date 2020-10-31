<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
                <div class="media-body">
                    <h4 class="card-title">
                       2.	Autocontrol.
                    </h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                   Has escuchado la frase: “Piensa antes de actuar”, me imagino que si y en varias ocasiones. Tener autocontrol implica reflexionar y dominar nuestras emociones y sentimientos. Reconocer cuando un sentimiento será pasajero, vaya expresar nuestras emociones sean estas positivas o negativas de forma adecuada. Te invito a realizar el siguiente ejercicio con el fin de comprender este punto.
                </div>
                <br>
                
                <div class="col-12 mt-3 text">
                    <b>Ejercicio SPECC:</b>  Situación – Pensamiento - Emoción- Conducta -Consecuencia.
                </div>
                <br>
                <br>
                <div class="col-12 mt3 text-center">
                    <b>Ejercicio: Mis ventanas ante la vida.</b>
                </div>
            </div>
            <div class="col-12 mt-3 text-center">
                  <b>Paso 1.</b> Elabora los dos siguientes cuadrantes alusivos a la herramienta - SPECC.
                </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center form-group">  
                    <label>
                        <b>Situación</b> Piensa en una situación en la que estuviste feliz. 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Pensamiento</b>  ¿Qué pensamientos pasaron por tu mente en ese momento? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                      <b>Emoción</b>  ¿Qué emociones tuviste? (entusiasmo, alegría etc.)
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[5].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Conducta</b> ¿Cómo te comportaste/actuaste en esta situación? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[7].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     <b>Consecuencia</b>¿Qué consecuencias tuviste por tu actuar? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[9].respuesta" rows="3"></textarea>
                </div>
               
                <div class="col-md-12 text-center form-group">  
                    <label>
                     <b>Situación</b>Piensa en una situación en la que te enojaste.  
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Pensamiento</b>¿Qué pensamientos pasaron por tu mente en ese momento? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     <b>Emociones</b>¿Qué emociones tuviste? (enojo, ira, etc.)
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[5].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Conducta</b> ¿Cómo te comportaste/actuaste en esa situación? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[7].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                    <b>Consecuencia</b>¿Qué consecuencias tuviste por tu actuar? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[9].respuesta" rows="3"></textarea>
                </div>
                <div class="col-12 text-center" >
                 En sí, el autocontrol no es hacer lo que siento, es elegir qué hacer con lo que siento.
                </div>
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="col-md-6 text-center">
                    <button class="btn btn-success btn-block" v-on:click="Crear_PDF">Descargar Mi Plan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'tema2seccion2',
    methods:{
        Calcular_Resultado(){
            var total=0;
            for (var i = 0; i < this.curso.temas[1].secciones[0].preguntas.length; i++) {
                console.log(this.curso.temas[1].secciones[0].preguntas);
                for (var x = 0; x < this.curso.temas[1].secciones[0].preguntas[i].respuestas.length; x++) {
                    if (this.curso.temas[1].secciones[0].preguntas[i].respuestas[x].selected) {
                        console.log(this.curso.temas[1].secciones[0].preguntas[i].respuestas[x].respuesta);
                        total=total+parseInt(this.curso.temas[1].secciones[0].preguntas[i].respuestas[x].valor);
                    }
                }
                console.log(total);
            }
            console.log(total);
            this.curso.temas[1].secciones[0].resultado=total;
        }   
    },
    mounted(){
        this.Calcular_Resultado();
    },
    computed:{
        curso(){
          return this.$store.getters.getCurso;
        }
    },
};
</script>
<style>
</style>