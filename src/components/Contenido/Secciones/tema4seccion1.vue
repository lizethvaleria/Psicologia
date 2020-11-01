<template>
    <div>
        <div class="card-body">
            <div class="row mt-4 justify-content-center">
                <div class="col-12 text-center">
                    <h2>¡Felicidades!</h2>
                    <h3>has logrado realizar cada una de las actividades del presente seminario.</h3> 
                    
                    <h5 class="mt-5">
                        Agradecemos tu participación
                    </h5>
                    <h5>
                    Sin lugar a dudas un gran reto, porque cada ejercicio contribuye a tu plan de vida y carrera. Es por ello, que la Universidad Autónoma de Nuevo León y nuestro rector el Ing. Rogelio G. Garza Rivera reconoce tu esfuerzo y valora tu disponibilidad con la entrega de un simbólico, pero significativo diploma que refleje tu andar proactivo para el manejo efectivo de tus emociones en diversos contextos.
                    </h5>
                    <h5>Recuerda:“El motivo principal de ponerse objetivos es que te obliga a convertirte en la persona que necesitas ser para lograrlos”.
                    </h5>
                    <h5>
                        Si deseas obtener tu certificado del curso, indica tu nombre completo y da clic en el siguiente botón
                    </h5>
                </div>
                <div class="form-group col-md-6 col-10 mt-3 text-center">
                    <label for="primer_nombre">Nombre(s)</label>
                    <input type="email" v-model="primer_nombre" class="form-control text-center" id="primer_nombre">
                </div>
                <div class="form-group col-md-6 col-10 mt-3 text-center">
                    <label for="primer_apellido">Apellidos</label>
                    <input type="email" v-model="primer_apellido" class="form-control text-center" id="primer_apellido">
                </div>
                <div class="col-12 mt-3 text-center">
                    <button class="btn btn-success" v-on:click="Obtener_Certificado">Obtener Certificado</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'tema4seccion1',
    data(){
        return {
            primer_apellido:'',
            primer_nombre:''
        }
    },
    methods:{
        Obtener_Certificado(){
            var nomusuario=this.primer_nombre+' '+this.primer_apellido;
            if (nomusuario.length>6) {
                this.curso.usuario.nomusuario=nomusuario;
                this.Guardar_En_LocalStorage();
                this.Guardar_En_Firebase();
                window.history.back();
                //window.open('http://localhost/Proyectos_Fime/Curso_Psicologia/curso_psicologia/static/certificado/?nombre='+nomusuario,"Certificado UANL");
                window.open('./static/certificado?nombre='+nomusuario,'Certificado UANL');
            }else{
                alert('Escribe tu Nombre y Apellido correctamente')
            }
        },
        ...mapActions(['LocalStorage_Avance','Guardar_En_LocalStorage','Guardar_En_Firebase'])
    },
    mounted(){
        this.nomusuario=this.curso.usuario.nomusuario;
        this.Guardar_En_LocalStorage();
        this.Guardar_En_Firebase();
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