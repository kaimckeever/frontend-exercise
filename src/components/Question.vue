<template>
  <div>
    <h1>{{ question.text }}</h1>
    <form>
      <div v-for="ans in question.answers" :key="ans">
        <input type="radio" name="ans" :value="ans" v-model="answer" />
        <label>{{ ans }}</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>