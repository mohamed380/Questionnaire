<template>
  <div>
    <h3>Brief:</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis
      optio exercitationem odio sunt alias enim provident amet inventore,
      sapiente consequuntur repudiandae repellendus ducimus. Cum, ea? Officiis
      tenetur atque vel!
    </p>
    <br />
    <div class="d-flex justify-content-center">
      <StartQuestionnaire :isDisabled="isDisabled" />
    </div>
  </div>
</template>

<script lang="ts">
import StartQuestionnaire from "@/components/StartQuestionnaire.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "StartQuestionnaireView",
  components: { StartQuestionnaire },
  computed: {
    ...mapGetters(["currentUser", "isInitializing", "isCreatingDummy"]),
    isDisabled(): boolean {
      return this.isInitializing || this.isCreatingDummy || !this.currentUser;
    },
  },
  methods: { ...mapActions(["createDummy", "intializeQuestionnaire"]) },

  async created() {
    await this.createDummy().then(async () => {
      if (this.currentUser) {
        await this.intializeQuestionnaire().then(() => {
          this.$router.push("/finish"); //first question
        });
      }
    });
  },
});
</script>