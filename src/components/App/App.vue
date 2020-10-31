<template>
  <div class="mdk-header-layout js-mdk-header-layout">
    <headerview></headerview>
    <div class="row mt-5 pt-5 justify-content-center" v-if="!curso.reglas_aceptadas || !curso.video_rector || !curso.informacion_llenada">
        <div class="col-12 text-center" v-if="!curso.video_rector">
            <h3>Cápsula Saber Ser</h3>
        </div>
        <div class="col-11 col-lg-6 text-center mb-5" v-if="!curso.video_rector">
            <div class="row ">
              <div class="col-12" v-if="!continuar">
                <h6>Podrás saltar este video en {{time}} segundos...</h6>
              </div>
              <div class="col-12 text-center" v-else>
                <a href="" v-on:click.prevent="Video_Visto" class="btn btn-sm btn-success">Saltar Video</a>
              </div>
            </div>
            <video width="300" class="mt-3 mx-auto" controls autoplay>
              <source src="static/videos/rector.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
        </div>
        <div class="col-12 mt-3 text-center" v-if="curso.video_rector && !curso.reglas_aceptadas">
            <h3>Sinopsis con notas aclaratorias</h3>
        </div>
     <div class="col-12">
          Es un gusto saludarte en esta ocasión por este medio y a su vez deseo reconocer tu gran esfuerzo y dedicación por llevar a cabo muy puntualmente el programa DIME (Desarrollo Integral del Manejo Emocional), el cual es una valiosa oportunidad para contribuir con tu plan de vida y carrera.
          Eres nuestra razón de SER y es por ello que creamos este programa para ti, ya que deseamos acompañarte en esta etapa socio-afectiva, que resulta esencial para enfrentar y resolver conflictos propios de tu edad y venideros en un futuro.
          El Seminario de Counseling Virtual DIME, es una plataforma de 6 horas (tu elijes tu ritmo) que te permitirá el desarrollo de habilidades intra e interpersonales, por mencionarte algunas: comunicación asertiva de sentimientos e ideas, crear situaciones de calma, optimismo, comprender mejor a los otros y a ti mismo, tomar decisiones más responsables, entre otras más. Para ello comprenderás, aplicarás y descubrirás las competencias centrales de la inteligencia emocional como lo son: Autoconocimiento, Autocontrol, Automotivación, Empatía y Habilidades Sociales. 
          Estoy convencido que en tu interior hay algo muy grande que vencerá cualquier obstáculo, porque empezarás a creer aún más en ti y desarrollarás aún más tu capacidad de resiliencia.
 </div>
        <div class="col-12 col-lg-8 mt-3" v-if="curso.video_rector && !curso.reglas_aceptadas">
            <ul>
                <li>
                    El presente seminario es de orden genérico y está dirigido principalmente a la comunidad que no cuenta con conocimientos especializados en el tema.  Además, <b>no sustituye o representa un tratamiento psicoterapéutico</b>. 
                </li>
                <li class="mt-3">
                    Resulta importante mencionar que se solicitaran ciertos datos generales sobre usted, para la elaboración de una <b>constancia</b> avalada por la <b>FAPSI y FIME</b>. Aclarando que en relación a las actividades propias del semanario serán manejadas con confidencialidad y anonimato.
                </li>
            </ul>
        </div>
        <div class="col-12 mt-5 mb-5 text-center" v-if="curso.video_rector && !curso.reglas_aceptadas">
          <a href="" v-on:click.prevent="Comenzar" class="btn btn-success">Comenzar</a>
        </div>
        <div class="col-12 mt-3 text-center" v-if="curso.reglas_aceptadas &&  !curso.informacion_llenada">
            <h3>Información Básica</h3>
        </div>
        <div class="col-lg-8 col-12 mt-5" v-if="curso.reglas_aceptadas &&  !curso.informacion_llenada">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-12 text-center">
                      ¿Eres estudiante de la UANL? 
                    </div>
                    <div class="col-12 mt-2 text-center">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="estudiante_uanl" id="si_estudiante_uanl" v-model="curso.usuario.estudiante_uanl" value="si">
                        <label class="form-check-label" for="si_estudiante_uanl">Si</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="estudiante_uanl" id="no_estudiante_uanl" v-model="curso.usuario.estudiante_uanl" value="no">
                        <label class="form-check-label" for="no_estudiante_uanl">No</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="estudiante_uanl" id="egresado_estudiante_uanl" v-model="curso.usuario.estudiante_uanl" value="egresado">
                        <label class="form-check-label" for="egresado_estudiante_uanl">Egresado</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-6 mt-5">
                  <div class="row justify-content-center">
                    <div class="col-8 col-md-10" v-if="curso.usuario.estudiante_uanl=='si' || curso.usuario.estudiante_uanl=='egresado'">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="facultad">Facultad</label>
                        </div>
                        <select class="custom-select" v-model="curso.usuario.facultad"  id="facultad">
                          <option value="Agronomía">Agronomía</option>
                          <option value="Arquitectura">Arquitectura</option>
                          <option value="Artes Escénicas">Artes Escénicas</option>
                          <option value="Artes Visuales">Artes Visuales</option>
                          <option value="Ciencias Biológicas">Ciencias Biológicas</option>
                          <option value="Ciencias de la Comunicación">Ciencias de la Comunicación</option>
                          <option value="Ciencias de la Tierra">Ciencias de la Tierra</option>
                          <option value="Ciencias Físico-Matemáticas">Ciencias Físico-Matemáticas</option>
                          <option value="Ciencias Forestales">Ciencias Forestales</option>
                          <option value="</option">Ciencias Políticas y Relaciones Internacionales</option>
                          <option value="Ciencias Químicas">Ciencias Químicas</option>
                          <option value="Contaduría Pública y Administración">Contaduría Pública y Administración</option>
                          <option value="Derecho y Criminología">Derecho y Criminología</option>
                          <option value="Economía">Economía</option>
                          <option value="Enfermería">Enfermería</option>
                          <option value="Filosofía y Letras">Filosofía y Letras</option>
                          <option value="Ingeniería Civil">Ingeniería Civil</option>
                          <option value="Ingeniería Mecánica y Eléctrica">Ingeniería Mecánica y Eléctrica</option>
                          <option value="Medicina">Medicina</option>
                          <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                          <option value="Música">Música</option>
                          <option value="Odontología">Odontología</option>
                          <option value="Organización Deportiva">Organización Deportiva</option>
                          <option value="Psicología" >Psicología</option>
                          <option value="Salud Pública y Nutrición">Salud Pública y Nutrición</option>
                          <option value="Trabajo Social y Desarrollo Humano">Trabajo Social y Desarrollo Humano</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="row justify-content-center">
                <div class="col-4">
                  <div class="row">
                    <div class="col-12 text-center">
                      ¿Trabajas? 
                    </div>
                    <div class="col-12 mt-2 text-center">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="trabajo" id="si_trabajo" v-model="curso.usuario.trabajo" value="si">
                        <label class="form-check-label" for="si_trabajo">Si</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="trabajo" id="no_trabajo" v-model="curso.usuario.trabajo" value="no">
                        <label class="form-check-label" for="no_trabajo">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-6 mt-5">
                  <div class="row justify-content-center">
                    <div class="col-10" v-if="curso.usuario.trabajo=='si'">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="puesto">Puesto</span>
                          </div>
                          <input type="text" v-model="curso.usuario.nomtrabajo" class="form-control" aria-describedby="puesto">
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5 mb-5 text-center" v-if="curso.reglas_aceptadas &&  !curso.informacion_llenada">
          <a href="" v-on:click.prevent="Continuar" class="btn btn-success">Continuar</a>
        </div>
    </div>
    <contenidoview v-if="curso.reglas_aceptadas && curso.informacion_llenada"></contenidoview>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderView     from '@/components/Header/Header.vue';
import ContenidoView  from '@/components/Contenido/Contenido.vue';
export default {
  components:{
    headerview:HeaderView,
    contenidoview:ContenidoView
  },
  data(){
    return {
      time:60,
      timer:null,
      continuar: true,
    }
  },
  methods:{
    Video_Visto(){ 
      this.curso.video_rector=true;
      this.Guardar_En_LocalStorage();
      //this.Guardar_En_Firebase();
    },  
    Comenzar(){
      this.curso.reglas_aceptadas=true;
      this.Guardar_En_LocalStorage();
      //this.Guardar_En_Firebase();
    },
    Continuar(){
      if (this.curso.usuario.estudiante_uanl==null) {
        alert('Todos las preguntas son obligatorias');
      }else if (this.curso.usuario.trabajo==null) {
        alert('Todos las preguntas son obligatorias');
      }else if (this.curso.usuario.trabajo=='si' && this.curso.usuario.nomtrabajo.length==0) {
        alert('Todos las preguntas son obligatorias');
      }else{
        $(".preloader").fadeIn();
        this.curso.informacion_llenada=true;
        this.Guardar_En_LocalStorage();
        this.Guardar_En_Firebase('si');
      }
    },
    ...mapActions(['LocalStorage_Avance','Guardar_En_LocalStorage','Guardar_En_Firebase'])
  },
  mounted(){
    var that = this;
    $(document).ready(function(){
      console.log('ready');
      var x = setInterval(function() {
        console.log('interval');
        that.time=that.time-1;
        if (that.time==0) {
          clearInterval(x);
          that.continuar=true;
        }
      },1000);
    });
  },
  computed:{
    curso(){
      return this.$store.getters.getCurso;
    }
  },

};
</script>

<style>
video {
  width: 100%;
  height: auto;
}
</style>
