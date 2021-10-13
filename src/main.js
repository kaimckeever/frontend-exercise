import Vue from 'vue'
import { MdButton, MdContent, MdRadio, MdLayout, } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'
import Quiz from "./Quiz.vue";
import questions from "./questions";

Vue.config.productionTip = false;
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdRadio)
Vue.use(MdLayout)

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
