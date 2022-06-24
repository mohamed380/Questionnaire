<template>
  <h2>{{ currentQuestion.name }}</h2>

  <h3>{{ currentQuestion.title }}</h3>

  <progressBar class="my-2" />

  <img v-if="fullImage" class="d-none d-md-block" :src="fullImage" />
  <img v-if="smallImage" class="d-md-none" :src="smallImage" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";

export default defineComponent({
  name: "Banner",
  components: { ProgressBar },
  props: {
    smallImage: {
      required: true,
      type: String
    },
    fullImage: {
      required: true,
      type: String
    },
  },
  computed: { ...mapGetters(["currentQuestion"]) },
});
</script>


<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>