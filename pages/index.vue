<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <posts />
    </v-col>
  </v-row>
</template>

<script>
import Posts from "~/components/Posts.vue";

export default {
  components: {
    Posts,
  },
};
</script>
