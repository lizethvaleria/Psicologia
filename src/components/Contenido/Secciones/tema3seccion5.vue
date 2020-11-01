<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
                <div class="media-body">
                    <h4 class="card-title">
                     5.	Habilidades sociales
                    </h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                 Los humanos somos seres sociales por naturaleza, sin embargo, socializamos de diversas formas. Tener buenas relaciones sociales nos ayuda a sentirnos parte de un rol o grupo. No es sencillo socializar, aunque parezca fácil para algunos. Socializar implica interactuar con situaciones que nos agradan y otras que no.  Para afianzar este este punto elabora el siguiente ejercicio:
                </div>
                <br>
                <br>
                <br>
                <div class="col-12 mt3 text-center">
                    <b>Ejercicio: La ley de mi espejo.</b>
                </div>
            </div>
            <div class="col-12 mt-3 text-center">
                  <b>Paso 1.</b> Desarrolla tu propia ley del espejo, por favor se honesto. ¡No te falles a ti mismo!
                </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center form-group">  
                    <label>
                       	<b>Primera Ley</b> ¿Qué es lo que más me molesta de los demás, pero sé que también está en mí?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       	<b>Segunda Ley</b>¿Qué es lo más me critican y me duele, pero me cuesta cambiarlo/trabajarlo?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     	<b>Tercera Ley</b>¿Qué es lo que me gusta de mí y sé que a los demás también? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[5].respuesta" rows="3"></textarea>
            </div>
             <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                      <b>Cuarta Ley</b>	¿Qué es lo más me critican y desean que cambie, pero sé que no soy así? Más bien está en los demás.
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[5].respuesta" rows="3"></textarea>
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="col-md-6 text-center">
                    <button class="btn btn-success btn-block" v-on:click="Crear_PDF">Descargar Mi Plan</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'tema3seccion5',
    updated(){
        this.Validar();
    },
    methods:{
        Crear_PDF(){
            var pdf = new jsPDF('landscape');
            var columns = ["Planning Personal de índole vertical"];
            var data = [
                [
                    '¿Qué es lo que más me molesta de los demás, pero sé que también está en mí?'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[1].respuesta
                ],
                [
                    '¿Qué es lo más me critican y me duele, pero me cuesta cambiarlo/trabajarlo?'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[3].respuesta
                ],
                [
                    '¿Qué es lo que me gusta de mí y sé que a los demás también? '
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[5].respuesta
                ],
                [
                    '¿Qué es lo más me critican y desean que cambie, pero sé que no soy así? Más bien está en los demás.'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[1].respuesta
                ],
            ];

            pdf.autoTable(columns,data,
                { margin:{ top: 25 }}
            );

            pdf.save("planning_personal.pdf");
        },
        Validar(){
            if(this.curso.temas[2].secciones[3].preguntas[1].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[3].preguntas[3].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[3].preguntas[5].respuesta.length==0){
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
        this.Validar();
    }
};
</script>