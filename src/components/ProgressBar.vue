<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ 'width': `${progress}%` }"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "ProgressBar",
  computed: {
    ...mapGetters(["currentQuestion"]),
    progress(): number {
     return (this.currentQuestion.index_number /
        this.currentQuestion.number_of_questions) * 100;
    },
  },
});
</script>


<style scoped>
</style>