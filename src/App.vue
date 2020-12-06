<template>
  <div id="app">
    <div class="container-fluid">
      <section-api></section-api>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SectionApi from "./components/SectionApi.vue";

export default {
  name: "App",
  components: {
    PageFooter,
    TeamCard,
    SectionApi,
  },
};
</script>
