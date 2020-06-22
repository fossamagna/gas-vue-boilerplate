<template>
  <HelloWorld msg="Welcome to Vuetify" />
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
  }
});
</script>
