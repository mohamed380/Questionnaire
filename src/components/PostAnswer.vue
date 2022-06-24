<template>
  <div v-if="currentQuestion">
    <Banner
      :fullImage="currentQuestion.post_answer_banner_url_full"
      :smallImage="currentQuestion.post_answer_banner_url_small"
    />
    <div class="question d-flex justify-content-center mt-4 mb-2">
      <span class="material-icons q-icon left" @click="showCurrenctQuestion">
        arrow_back
      </span>
      <h4 class="text-center mt-3">{{ currentQuestion.post_answer_text }}</h4>
      <span class="material-icons q-icon right" @click="showNextQuestion">
        arrow_forward
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  name: "PostAnswer",
  components: { Banner },
  computed: { ...mapGetters(["currentQuestion"]) },
  methods: { ...mapActions(["showCurrenctQuestion", "showNextQuestion"]) },
});
</script>

<style>
</style>