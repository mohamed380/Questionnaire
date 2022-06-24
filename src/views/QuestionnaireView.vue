<template>
  <div class="py-5">
    <loadingSpinner v-if="isQLoading" />
    <Question v-else-if="currentQuestion" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import Question from "@/components/Question.vue";
export default defineComponent({
  name: "QuestiuonnaireView",
  components: { LoadingSpinner, Question },
  methods: { ...mapActions(["getFirstQuestion"]) },
  computed: {
    ...mapGetters([
      "questionnaire",
      "currentUser",
      "isQLoading",
      "currentQuestion",
    ]),
  },
  async created() {
    if (!(this.questionnaire && this.currentUser)) {
      this.$router.push("answer_questionnaire");
    }
    await this.getFirstQuestion();
  },
  watch: {
    questionnaire: {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue.finished) {
          this.$router.push("finish");
        }
      },
    },
  },
});
</script>
