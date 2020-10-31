<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods:{
    ...mapActions(['LocalStorage_Avance'])
  },
  created(){
    this.LocalStorage_Avance();
  },
};
</script>

<style>
.blue_uanl{
    background-color: #004A8F !important;
}
.yellow_uanl{
    background-color: #FBC43D !important;
}
.video-responsive {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: 30px;
    position: relative;
    }
.video-responsive iframe, .video-responsive object, .video-responsive embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    }
</style>
