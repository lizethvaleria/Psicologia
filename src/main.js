
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyAV4tSzfTJPQPOCIONVTJ3lLbwItXzBOng",
    authDomain: "uanl-e12f9.firebaseapp.com",
    databaseURL: "https://uanl-e12f9.firebaseio.com",
    projectId: "uanl-e12f9",
    storageBucket: "uanl-e12f9.appspot.com",
    messagingSenderId: "396460109224",
    appId: "1:396460109224:web:f0246c148b4290e09fc19d"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
