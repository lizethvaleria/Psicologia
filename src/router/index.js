import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App/App';
import AcercaDe from '@/components/AcercaDe/AcercaDe';
import Bienvenida from '@/components/bienvenida/bienvenida';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Bienvenida', component: Bienvenida},
    {path: '/curso', name: 'Curso', component: App},
    {path: '/acercade', name: 'AcercaDe', component: AcercaDe},
    {path: '/inicio', name: 'App', component: App}
  ]
})
