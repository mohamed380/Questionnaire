<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="container-fluied px-4">
    <NavBar />
    <RouterView class="pt-5" />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
