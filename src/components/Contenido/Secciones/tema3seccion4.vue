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
                <br>
                <br>
                 <div align="center"> <img src="../../../img/empatia.png" width="400" height="200"> </div>
            <div class="row mt-5">
                <div :key="pregunta.mensaje" v-for="pregunta in preguntas" class="col-md-12 text-center form-group">  
                    <label>
                        {{ pregunta.mensaje }}
                    </label>
                    <textarea class="form-control respuesta_seccion3" v-model="pregunta.respuesta" rows="3"></textarea>
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
import { downloadPreguntasPDF } from "@/services/jspdf";

export default {
    name:'tema3seccion4',
    methods:{
        Crear_PDF(){
            downloadPreguntasPDF('En los zapatos de otros', this.preguntas, 'tema3_seccion4.pdf');
        },
    },
    data() {
        return {
            preguntas: this.$store.getters.getCurso.temas[2].secciones[3].preguntas
        }
    }
};
</script>