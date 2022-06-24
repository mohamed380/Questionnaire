<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div class="start-questionnaire-container" v-else>
      <h3>Brief:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        officiis optio exercitationem odio sunt alias enim provident amet
        inventore, sapiente consequuntur repudiandae repellendus ducimus. Cum,
        ea? Officiis tenetur atque vel!
      </p>
      <br />
      <div class="d-flex justify-content-center">
        <button
          :disabled="isDisabled"
          @click="$router.push('questionnaire')"
          type="button"
          class="btn btn-success"
        >
          <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Start Questionnaire</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import type IQuestionnaireResponse from "@/interfaces/responses/IQuestionnaireResponse";
import questionnaire from "@/models/questionnaire";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default defineComponent({
  name: "StartQuestionnaireView",
  components: { LoadingSpinner },
  computed: {
    ...mapGetters([
      "currentUser",
      "isQLoading",
      "isCreatingDummy",
      "questionnaire",
    ]),
    isLoading(): boolean {
      return this.isQLoading || this.isCreatingDummy;
    },
    isDisabled(): boolean {
      return this.isLoading || !this.currentUser || !this.questionnaire;
    },
  },
  methods: {
    ...mapActions(["createDummy", "initializeQuestionnaire"]),
    ...mapMutations({ setQuestionnaire: "SET_QUESTIONNAIRE" }),
  },

  async created() {
    await this.createDummy();
    //@ts-ignore
    const { questionnaire_id, user_test_group_id }: string = this.$route.query;

    if (this.currentUser) {
      if (questionnaire_id && user_test_group_id) {
        this.setQuestionnaire(
          new questionnaire({
            questionnaire_id: parseInt(questionnaire_id),
            user_test_group_id: parseInt(user_test_group_id),
          })
        );
        return;
      }
      this.initializeQuestionnaire();
    }
  },
});
</script>