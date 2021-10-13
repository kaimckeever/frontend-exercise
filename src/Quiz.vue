<template>
  <div>
    <div v-if="!this.started">
      <button v-on:click="started = true">Begin Quiz</button>
    </div>
    <div v-if="this.started && i < questions.length">
      <h1>{{ questions[i].text }}</h1>
      <form>
        <div v-for="ans in questions[i].answers" :key="ans">
          <input type="radio" name="ans" v-model="answer" :value="ans" />
          <label>{{ ans }}</label>
        </div>
      </form>
      <button v-show="answer != ''" v-on:click="next()">Next</button>
    </div>
    <div v-if="this.started && i >= questions.length">
      <div v-for="(q, index) in questions" :key="q">
        <b>{{ q.text }}</b>
        <p>{{ answerList[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { started: false, i: 0, answer: "", answerList: [] };
  },
  methods: {
    next: function () {
      this.answerList.push(this.answer);
      this.i++;
      this.answer = "";
    },
  },
};
</script>
