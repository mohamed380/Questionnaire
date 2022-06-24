<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <input
        v-model="answer"
        @change="updateAnswer"
        type="date"
        class="form-control"
        aria-describedby="addon-wrapping"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapGetters } from "vuex";
export default defineComponent({
  name: "Date",
  computed: {
    ...mapGetters(["currentQuestion"]),
    answer(): [] {
      return this.currentQuestion?.localAnswer ?? "";
    },
  },
  methods: {
    ...mapMutations({ setAnswer: "ANSWER_QUESTION" }),
    updateAnswer(e: Event) {
      this.setAnswer((e.target as HTMLInputElement).value);
    },
  },
});
</script>


<style scoped>
</style>