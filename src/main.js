import Vue from 'vue'
import App from './App.vue'
import VueFlatpickr from 'vue-flatpickr'
import 'vue-flatpickr/theme/airbnb.css'



Vue.use(VueFlatpickr)

new Vue({
    el: '#app',
    render: h => h(App)
})