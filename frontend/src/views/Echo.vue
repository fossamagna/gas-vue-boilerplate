<template>
  <v-form>
    <v-container>
      <v-row>
        <v-text-field v-model="input" />
        <v-btn @click="echo">exec echo</v-btn>
      </v-row>
      <v-row>
        <p>{{ message }}</p>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts">
/// <reference path="../google.script.d.ts" />
import { Component, Prop, Vue } from "vue-property-decorator";
import { defineComponent, reactive, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const input = ref("");
    const message = ref("");

    const echo = () => {
      google.script.run
        .withSuccessHandler((value: string) => (message.value = value))
        .withFailureHandler(e => console.error(e))
        .echo(input.value);
    }

    return {
      input,
      message,
      echo,
    }
  }
});
</script>
