<template>
  <div
    class="form-check"
    :class="{ 'form-check-inline': answers.length <= 3 }"
    v-for="answer in answers"
    :key="answer.code"
    @click="setAnswer(answer)"
  >
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      :id="`inlineRadio${answer.code}`"
      :value="answer.code"
      :checked="userAnswer?.code == answer.code"
    />
    <label v-html="answer.text" class="form-check-label mx-3" :for="`inlineRadio${answer.code}`"></label>
  </div>
</template>

<script lang="ts">
import type answer from "@/models/answer";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "Radio",
  computed: {
    ...mapGetters(["currentQuestion"]),
    userAnswer(): answer | null {
      return this.currentQuestion?.localAnswer ?? null;
    },
    answers(): answer[] | null {
      return this.currentQuestion?.answers ?? null;
    },
  },
  methods: {
    ...mapMutations({ setAnswer: "ANSWER_QUESTION" }),
  },
});
</script>


<style scoped>
.form-check input,
.form-check label,
.form-check {
  cursor: pointer;
}
</style>