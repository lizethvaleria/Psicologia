<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
                <div class="media-body">
                    <h4 class="card-title">
                       4.	Empatía
                    </h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                  La tradicional explicación hace referencia a que debemos tomar en cuenta los sentimientos de los otros. Coloquialmente también se dice ponernos en lugar o “zapatos “del otro. El siguiente ejercicio ilustra este punto.
                </div>
                <br>
                <br>
                <br>
                <div class="col-12 mt3 text-center">
                    <b>Ejercicio: En los zapatos de otros.</b>
                </div>
            </div>
            <div class="col-12 mt-3 text-center">
                  <b>Paso 1.</b> Observa muy bien la siguiente imagen.
                </div>
                <div class="col-12 mt-3 text-center">
                  <b>Paso 2.</b> Contesta desde tu punto de vista las siguientes preguntas. Independientemente, de por qué el padre señale a su hija. 
                </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center form-group">  
                    <label>
                       	¿Qué te dice la imagen?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       	¿Qué te imaginas que siente la niña?
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[3].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     	¿Qué te imaginas que siente el padre?? 
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
    name:'tema3seccion4',
    updated(){
        this.Validar();
    },
    methods:{
        Crear_PDF(){
            var pdf = new jsPDF('landscape');
            var columns = ["Planning Personal de índole vertical"];
            var data = [
                [
                    '¿Qué es lo que más me agrada de mí?'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[1].respuesta
                ],
                [
                    '¿Qué es lo que más me molesta de mí?'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[3].respuesta
                ],
                [
                    '¿Cómo considero que me ven los demás usualmente?'
                ],
                [
                    this.curso.temas[2].secciones[3].preguntas[5].respuesta
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