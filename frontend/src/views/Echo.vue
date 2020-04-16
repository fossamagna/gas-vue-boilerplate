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

@Component
export default class Echo extends Vue {
  @Prop({ type: String, default: "" })
  private input!: string;
  @Prop({ type: String, default: "" })
  private message!: string;

  echo() {
    const input = this.input;
    google.script.run
      .withSuccessHandler((value: string) => (this.message = value))
      .withFailureHandler(e => console.error(e))
      .echo(input);
  }
}
</script>
