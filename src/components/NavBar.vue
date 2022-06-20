<template>
  <nav class="navbar navbar-expand-lg mx-5 py-3">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.svg" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="material-icons"> list </span>
    </button>
    <div class=" navbar-collapse collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav ms-auto pr-6 d-md-flex align-items-center">
        <li class="nav-item active">
          <a class="nav-link" href="#">Diensten</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cases</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nieuws</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
      <button
        class="nav-item btn btn-light btn-rounded d-flex justify-content-center"
      >
        <span class="material-icons"> search </span>
      </button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  data() {
    return {
      title: import.meta.env.VITE_APP_TITLE as string,
    };
  },
});
</script>

<style scoped>
.nav-item {
  margin-left: 2rem !important;
}
.nav-link {
  color: #00483b !important;
  transition: all 0.2s;
  font-size: 18px;
  font-family: EestiMedium, sans-serif;
  font-weight: 500;
}
.nav-link:hover {
  color: #00af38 !important;
}
</style>