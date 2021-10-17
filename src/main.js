import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.css'
import router from './router'
import { store } from './store/store'

import axios from 'axios';

function getToken(){
  let token = localStorage.getItem('token');

  return `Token ${token}`;
}
const base = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
});
base.defaults.headers.common['Authorization'] = getToken() ;

export default base;
const app = createApp(App);


app.use(router);
app.use(store);
app.mount('#app');
