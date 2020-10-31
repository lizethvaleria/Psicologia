import Vue from 'vue'
import Router from 'vue-router'
import App  from '@/components/App/App';
import AcercaDe  from '@/components/AcercaDe/AcercaDe';

Vue.use(Router)

export default new Router({
  routes: [
  	{ path: '/', 			name: 'App', component: App},
  	{ path: '/curso', 		name: 'Curso', component: App},
  	{ path: '/acercade', 	name: 'AcercaDe', component: AcercaDe}
  ]
})
