<template>
    <div>
        <div class="card-header">
            <div class="media align-items-center">
                <div class="media-body">
                    <h4 class="card-title">
                       3. 	Automotivación.
                    </h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                  Es decir, que tus emociones o sentimientos se enfoquen a la creación de nuevas metas y logros. Para ello ocupas optimismo e iniciativa, aunque en ocasiones el contexto no sea favorable. A continuación, el siguiente ejercicio te ayuda a profundizar en este punto.
                </div>
                <br>
                <br>
                <br>
                <div class="col-12 mt3 text-center">
                    <b>Ejercicio: Mi árbol de logros.</b>
                </div>
            </div>
            <div class="col-12 mt-3 text-center">
                  <b>Paso 1.</b> Desarrollo el modelo mi árbol de logros.
                </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center form-group">  
                    <label>
                        <b>Mis raíces</b> 	¿Qué me sostiene en esta vida? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[2].preguntas[1].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Tronco</b> ¿Qué meta me puedo proponer? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[2].preguntas[3].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                      <b>Ramas</b>¿Por qué deseo esa meta? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[2].preguntas[5].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                       <b>Hojas</b>¿Qué debo hacer para lograr esa meta? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[2].preguntas[7].respuesta" rows="3"></textarea>
                </div>
                <div class="col-md-12 text-center mt-5 form-group">
                    <label>
                     <b>Frutos</b>¿Qué espero lograr con esa meta? 
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="curso.temas[2].secciones[2].preguntas[9].respuesta" rows="3"></textarea>
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
    name:'tema3seccion3',
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
                    this.curso.temas[2].secciones[2].preguntas[1].respuesta
                ],
                [
                    '¿Qué es lo que más me molesta de mí?'
                ],
                [
                    this.curso.temas[2].secciones[2].preguntas[3].respuesta
                ],
                [
                    '¿Cómo considero que me ven los demás usualmente?'
                ],
                [
                    this.curso.temas[2].secciones[2].preguntas[5].respuesta
                ],
                [
                    '¿Cuáles son mis principales talentos?'
                ],
                [
                    this.curso.temas[2].secciones[2].preguntas[7].respuesta
                ],
                [
                    '¿Cómo es mi relación con mi familia en general?'
                ],
                [
                    this.curso.temas[2].secciones[2].preguntas[9].respuesta
                ],
            ];

            pdf.autoTable(columns,data,
                { margin:{ top: 25 }}
            );

            pdf.save("planning_personal.pdf");
        },
        Validar(){
            if(this.curso.temas[2].secciones[2].preguntas[1].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[2].preguntas[3].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[2].preguntas[5].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[2].preguntas[7].respuesta.length==0){
                this.curso.continuar=false;
            }
            else if(this.curso.temas[2].secciones[2].preguntas[9].respuesta.length==0){
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