import Vue from 'vue'
import { MdButton, MdContent, MdRadio, MdLayout, } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'
import Quiz from "./Quiz.vue";
import questions from "./questions";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
