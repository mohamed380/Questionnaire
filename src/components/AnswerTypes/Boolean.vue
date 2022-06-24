<template>
  <div class="d-flex justify-content-center">
    <button
      type="button"
      class="btn mx-4"
      :class="{
        'btn-primary': selectedAnswer === true,
        'btn-outline-primary': selectedAnswer !== true,
      }"
      @click="selectAnswer(true)"
    >
      True
    </button>
    <button
      type="button"
      class="btn mx-4"
      :class="{
        'btn-primary': selectedAnswer === false,
        'btn-outline-primary': selectedAnswer !== false,
      }"
      @click="selectAnswer(false)"
    >
      False
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "Boolean",
  computed: {
    ...mapGetters(["currentQuestion"]),
    selectedAnswer(): boolean|null{
      return this.currentQuestion?.localAnswer??null
    }
  },
  methods: {
    ...mapMutations({ setAnswer: "ANSWER_QUESTION" }),
    selectAnswer(answer: boolean) {
        this.selectedAnswer = answer
        this.setAnswer(answer)
    },
  },
});
</script>


<style scoped>
</style>