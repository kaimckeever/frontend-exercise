<template>
  <div>
    <div v-if="!this.started">
      <button v-on:click="started = true">Begin Quiz</button>
    </div>
    <div v-if="this.started">
      <Question :question="questions[i]"></Question>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
import Question from "./components/Question.vue";
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  components: {
    Question,
  },
  data() {
    return { started: false, i: 0 };
  },
};
</script>
