<template>
  <div>
    <h3>Finish:</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis
      optio exercitationem odio sunt alias enim provident amet inventore,
      sapiente consequuntur repudiandae repellendus ducimus. Cum, ea? Officiis
      tenetur atque vel!
    </p>
    <br />
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="clear">Finish</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  name: "FinishView",
  methods: {
    clear() {
      this.removeCurrentUser();
      this.$router.push("/");
    },
    ...mapActions(["removeCurrentUser"]),
  },
  computed: { ...mapGetters(["questionnaire"]) },
  created() {
    if(!(this.questionnaire && this.questionnaire.finished)){
        this.$router.push('/');
    }
  },
});
</script>