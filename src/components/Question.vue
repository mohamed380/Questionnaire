<template>
  <div v-if="currentQuestion">
    <div class="questionContainer" v-if="!currentQuestion.postAnswerFlag">

      <Banner 
        :fullImage="currentQuestion.banner_url_full"
        :smallImage="currentQuestion.banner_url_small"
       />

      <div
        class="p-3"
        v-if="currentQuestion.pre_question_text"
        v-html="currentQuestion.pre_question_text"
      ></div>

      <div class="question d-flex justify-content-center mt-4 mb-2">
        <span
          class="material-icons q-icon left"
          v-if="currentQuestion.index_number > 1"
          @click="previousQuestion"
        >
          arrow_back
        </span>
        <h2 class="text-center">{{ currentQuestion.question }}</h2>
        <span
          class="material-icons q-icon right mb-4"
          v-if="currentQuestion.explanation"
          @click="toggleExplain"
        >
          error
        </span>
      </div>

      <div
        class="text-center"
        v-if="currentQuestion.explanation && showExplain"
      >
        <h6 v-html="currentQuestion.explanation"></h6>
      </div>

      <Answer class="my-4" />

      <div class="text-center mt-4" v-if="currentQuestion.post_question_text">
        <h6 v-html="currentQuestion.post_question_text"></h6>
      </div>

      <div class="btn-container d-flex justify-content-center my-4">
        <button
          :disabled="isSubmitting"
          @click="submitAnswer"
          type="button"
          class="btn btn-success"
        >
          <div v-if="isSubmitting" class="spinner-border" role="status">
            <span class="visually-hidden">submiting...</span>
          </div>
          <span v-else>Submit</span>
        </button>
      </div>

    </div>
    <PostAnswer v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import Banner from "@/components/Banner.vue";
import Answer from "@/components/Answer.vue";
import PostAnswer from "@/components/PostAnswer.vue";

export default defineComponent({
  name: "Question",
  components: { Banner, Answer, PostAnswer },
  data() {
    return {
      showExplain: false,
    };
  },
  computed: { ...mapGetters(["currentQuestion", "isSubmitting"]) },
  methods: {
    ...mapActions(["submitAnswer", "previousQuestion"]),
    toggleExplain() {
      this.showExplain = !this.showExplain;
    },
  },
});
</script>
