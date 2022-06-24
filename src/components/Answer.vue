<template>
  <div v-if="currentQuestion">
    <component v-bind:is="currentAnswerComponent"></component>
    <div
      v-if="currentQuestion.hasError()"
      class="text-danger border border-danger rounded mt-3 p-3"
    >
      <b v-if="currentQuestion.error_msg">{{ currentQuestion.error_msg }}</b>
      <br />
      <b v-if="currentQuestion.validator_errmsg">{{
        currentQuestion.validator_errmsg
      }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown from "@/components/AnswerTypes/Dropdown.vue";
import Boolean from "@/components/AnswerTypes/Boolean.vue";
import Checkbox from "@/components/AnswerTypes/Checkbox.vue";
import Radio from "@/components/AnswerTypes/Radio.vue";
import Date from "@/components/AnswerTypes/Date.vue";
import Text from "@/components/AnswerTypes/Text.vue";
import Number from "@/components/AnswerTypes/Number.vue";

import { mapGetters } from "vuex";
import questionTypes from "@/models/questionTypes";
export default defineComponent({
  name: "Answer",
  components: { Dropdown, Boolean, Checkbox, Radio, Date, Text, Number },
  computed: {
    ...mapGetters(["currentQuestion"]),
    currentAnswerComponent(): string {
      if(this.currentQuestion.type == 'STRING'){
        return 'Text';
      }
      //@ts-ignore
      return Object.keys(questionTypes).find(
        //@ts-ignore
        (key) => questionTypes[key] == this.currentQuestion?.type
      );
    },
  },
});
</script>


<style scoped>
</style>