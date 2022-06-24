<template>
  <div class="d-flex justify-content-center">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle px-4"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        v-html="answerLabel"
      >
        
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li
          v-for="answer in answers"
          :key="answer.code"
        >
          <span class="dropdown-item" @click="selectAnswer(answer)" v-html="answer.text"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import type answer from "@/models/answer";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "Dropdown",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentQuestion"]),
    answerLabel(): string {
      return this.userAnswer?.text ?? "Select Answer";
    },
    userAnswer(): answer | null {
      return this.currentQuestion?.localAnswer ?? null;
    },
    answers(): answer[] | null {
      return this.currentQuestion?.answers ?? [];
    },
  },
  methods: {
    ...mapMutations({ setAnswer: "ANSWER_QUESTION" }),
    selectAnswer(selectedAnswer: answer) {
      // this.userAnswer = selectedAnswer;
      this.setAnswer(selectedAnswer);
    },
  },
});
</script>


<style scoped>
ul {
  max-height: 200px;
  overflow-y: scroll;
}
li {
  cursor: pointer;
}
</style>