<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
               <div class="media-left">
                    <h4 class="mb-0"><strong>1</strong></h4>
                </div>
                <div class="media-body">
                    <h4 class="card-title">
                        	El sendero de mis emociones
                    </h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    A continuación, se abordarán de forma explicativa y práctica las 5 capacidades para el manejo efectivo de las emociones: 
                </div>
                <div class="col-12 mt-3 text">
                    <b>1.Mi Autoconocimiento</b> Esta competencia es muy sencilla de entender, más no así su desarrollo ya que implica un viaje a nuestro interior y reconocer el buen o mal manejo de nuestras actuaciones en la cotidianidad de nuestra vida.  Se debe hacer una reflexión profunda y honesta de nuestras emociones y sentimientos. Para comprender mejor este punto te invito a realizar el siguiente ejercicio.
                </div>
                <div class="col-12 mt3 text-center">
                    <b>Ejercicio: Mis ventanas ante la vida.</b>
                </div>
            </div>
            <div class="col-12 mt-3 text-center">
                  <b>Paso 1.</b> Desarrolla la siguiente matriz sobre las ventanas de mi vida.
                </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center form-group">
                    <label>
                        ¿Qué es lo que más me agrada de mí?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                        ¿Qué es lo que más me molesta de mí?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                        ¿Cómo considero que me ven los demás usualmente?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[5].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                        ¿Cuáles son mis principales talentos?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[7].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                        ¿Cómo es mi relación con mi familia en general?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[9].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     ¿Cómo me relaciono con mis amistades en general?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[11].respuesta" rows="3"></textarea>
                </div>
                 <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     En mi infancia fui un niño/a: 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[13].respuesta" rows="3"></textarea>
                </div>
                 <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                    ¿Cómo me veo respecto a mi presente? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[15].respuesta" rows="3"></textarea>
                </div>
                 <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                    ¿Cómo me veo respecto a mi futuro?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[0].preguntas[17].respuesta" rows="3"></textarea>
                </div>
                 <div class="col-12 text-center">
                   Conocerse a sí mismo implica tiempo y está presente a lo largo de la vida. No corras, es un aprendizaje de vida permanente y continua.
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
export default {
    name:'tema3seccion1',
    updated(){
        this.Validar();
    },
    methods:{
        LlenarPreguntas() {
            var data = [
                {
                    respuesta: '¿Qué es lo que más me agrada de mí?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[1].respuesta
                },
                {
                    respuesta: '¿Qué es lo que más me molesta de mí?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[3].respuesta
                },
                {
                    respuesta: '¿Cómo considero que me ven los demás usualmente?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[5].respuesta
                },
                {
                    respuesta: '¿Cuáles son mis principales talentos?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[7].respuesta
                },
                {
                    respuesta: '¿Cómo es mi relación con mi familia en general?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[9].respuesta
                },
                {
                    respuesta: '¿Cómo me relaciono con mis amistades en general?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[11].respuesta
                },
                {
                    respuesta: 'En mi infancia fui un niño/a: '
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[13].respuesta
                },
                {
                    respuesta: '¿Cómo me veo respecto a mi presente? '
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[15].respuesta
                },
                {
                    respuesta: '¿Cómo me veo respecto a mi futuro?'
                },
                {
                    respuesta: this.curso.temas[2].secciones[0].preguntas[17].respuesta
                }
            ];

            this.curso.temas[2].secciones[0].preguntas = data;
        },
        Crear_PDF(){
            var pdf = new jsPDF('landscape');
            var columns = ["Mis ventanas ante la vida"];
            var data = [
                [
                    '¿Qué es lo que más me agrada de mí?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[1].respuesta
                ],
                [
                    '¿Qué es lo que más me molesta de mí?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[3].respuesta
                ],
                [
                    '¿Cómo considero que me ven los demás usualmente?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[5].respuesta
                ],
                [
                    '¿Cuáles son mis principales talentos?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[7].respuesta
                ],
                [
                    '¿Cómo es mi relación con mi familia en general?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[9].respuesta
                ],
                [
                    '¿Cómo me relaciono con mis amistades en general?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[11].respuesta
                ],
                [
                    'En mi infancia fui un niño/a: '
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[13].respuesta
                ],
                [
                    '¿Cómo me veo respecto a mi presente? '
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[15].respuesta
                ],
                [
                    '¿Cómo me veo respecto a mi futuro?'
                ],
                [
                    this.curso.temas[2].secciones[0].preguntas[17].respuesta
                ]
            ];

            pdf.autoTable(columns,data,
                { margin:{ top: 25 }}
            );

            pdf.save("planning_personal.pdf");
        },
        Validar(){
            if(this.curso.temas[2].secciones[0].preguntas[1].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[0].preguntas[3].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[0].preguntas[5].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[0].preguntas[7].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[0].preguntas[9].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[0].preguntas[11].respuesta.length==0){
                this.curso.continuar=false;
            }
            if(this.curso.temas[2].secciones[0].preguntas[13].respuesta.length==0){
                this.curso.continuar=false;
            }
            if(this.curso.temas[2].secciones[0].preguntas[15].respuesta.length==0){
                this.curso.continuar=false;
            }
            if(this.curso.temas[2].secciones[0].preguntas[17].respuesta.length==0){
                this.curso.continuar=false;
            }
            else{
                this.curso.continuar=true;
            }
        }
    },
    computed:{
        curso(){
          return this.$store.getters.getCurso;
        }
    },
    mounted(){
        this.LlenarPreguntas();
        this.Validar();
    }
};
</script>
<style>
</style>