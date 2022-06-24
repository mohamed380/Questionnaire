<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h4 class="pt-5">Initializing You'r request!</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoadingSpinner",
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