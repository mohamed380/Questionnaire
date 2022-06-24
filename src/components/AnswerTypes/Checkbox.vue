<template>
  <div
    class="form-check"
    v-for="answer in answers"
    :key="answer.code"
    @click="setAnswer(answer)"
  >
    <input
      class="form-check-input"
      type="checkbox"
      :value="answer.code"
      :id="`checkbox${answer.code}`"
      :checked="isChecked(answer)"
    />
    <label class="form-check-label" :for="`checkbox${answer.code}`">
      {{ answer.text }}
    </label>
  </div>
</template>

<script lang="ts">
import type answer from "@/models/answer";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "Checkbox",
  computed: {
    ...mapGetters(["currentQuestion"]),
    answers(): answer[] | null {
      return this.currentQuestion?.answers ?? null;
    },
    userAnswer(): answer[] | null {
      return this.currentQuestion?.localAnswer ?? null;
    },
  },
  methods: {
    ...mapMutations({ setAnswer: "ANSWER_QUESTION" }),
    isChecked(answer: answer): boolean {
      return this.userAnswer
        ? this.userAnswer.find(
            (answerItem: answer) => answerItem.code == answer.code
          ) !== undefined
        : false;
    },
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