<template>
  <div class="md-layout md-alignment-center">
    <div
      class="
        md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100
      "
      v-if="!this.started"
    >
      <md-content>
        <h1>Cognito Forms Quiz</h1>
        <p>
          You will be presented with a series of multiple choice questions, and
          when you've answered all of the questions, you can see a summary of
          your answers.
        </p>
        <button class="md-button" v-on:click="started = true">
          Begin Quiz
        </button>
      </md-content>
    </div>
    <div
      class="
        md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100
      "
      v-if="this.started && i < questions.length"
    >
      <h1>{{ questions[i].text }}</h1>
      <form>
        <div v-for="ans in questions[i].answers" :key="ans">
          <md-radio type="radio" name="ans" v-model="answer" :value="ans">
            {{ ans }}
          </md-radio>
        </div>
      </form>
      <button class="md-button" v-show="answer != ''" v-on:click="next()">
        <div v-if="i == questions.length - 1">Submit</div>
        <div v-else>Next</div>
      </button>
    </div>
    <div v-if="this.started && i >= questions.length">
      <md-content>
        <h1>Summary</h1>
        <div v-for="(q, index) in questions" :key="q">
          <h2>{{ q.text }}</h2>
          <p>{{ answerList[index] }}</p>
        </div>
      </md-content>
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
