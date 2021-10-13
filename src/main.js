import Vue from 'vue'
import Quiz from "./Quiz.vue";
import questions from "./questions";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
