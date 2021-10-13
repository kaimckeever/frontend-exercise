<template>
  <div class="m-2 mt-6 px-2">
    <div v-if="!this.started" class="section is-medium is-fluid">
      <h1 class="title">Cognito Forms Quiz</h1>
      <h2 class="subtitle">
        You will be presented with a series of multiple choice questions, and
        when you've answered all of the questions, you can see a summary of your
        answers.
      </h2>
      <b-button v-on:click="started = true">Begin Quiz</b-button>
    </div>
    <div
      v-if="this.started && i < questions.length"
      class="section is-medium is-fluid"
    >
      <h1 class="title">{{ questions[i].text }}</h1>
      <section>
        <div class="block" v-for="ans in questions[i].answers" :key="ans">
          <b-radio name="ans" v-model="answer" :native-value="ans">
            {{ ans }}
          </b-radio>
        </div>
      </section>
      <b-button v-show="answer != ''" v-on:click="next()">Next</b-button>
    </div>
    <div
      v-if="this.started && i >= questions.length"
      class="container is-fluid"
    >
      <h1 class="title">Summary</h1>
      <div class="columns">
        <div class="column" v-for="(q, index) in questions" :key="q">
          <h2 class="subtitle">{{ index + 1 }}. {{ q.text }}</h2>
          <p>{{ answerList[index] }}</p>
        </div>
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
