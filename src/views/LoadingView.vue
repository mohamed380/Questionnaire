<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h4 class="pt-5">Initializing You'r request!</h4>
  </div>
</template>

<script lang="ts">
import type IQuestionnaireResponse from "@/interfaces/responses/IQuestionnaireResponse";
import questionnaire from "@/models/questionnaire";
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "LoadingView",
  methods: { ...mapMutations({ setQuestionnaire: "SET_QUESTIONNAIRE" }) },
  computed: {},
  created() {
    if (
      this.$route.query.questionnaire_id &&
      this.$route.query.user_test_group_id
    ) {
      let userRequestParams: IQuestionnaireResponse = {
        //@ts-ignore
        questionnaire_id: parseInt(this.$route.query.questionnaire_id),
        //@ts-ignore
        user_test_group_id: parseInt(this.$route.query.user_test_group_id),
      };
      let questionnaireVar = new questionnaire(userRequestParams);
      this.setQuestionnaire(questionnaireVar);
    }

    this.$router.push("start-questionnaire");
  },
});
</script>

<style scoped>
.d-flex {
  height: 30rem;
}
.spinner-border {
  width: 10rem;
  height: 10rem;
}
</style>