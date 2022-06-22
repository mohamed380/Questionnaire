<template>
  <button
    :disabled="isDisabled"
    @click="intializeQuestionnaire"
    type="button"
    class="btn btn-success"
  >
    <div v-if="isDisabled" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <span v-else>Start Questionnaire</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "StartQuestionnaire",
  props:{
    isDisabled: {
      required: true,
      type: Boolean
    }
  },
  methods: { ...mapActions(["intializeQuestionnaire"]) },
});
</script>

<style>
</style>