<template>
  <v-list three-line>
    <v-list-item-group
      v-model="selectedPost"
      :color="this.$vuetify.theme.dark ? 'dark' : 'primary'"
    >
      <template v-for="(item, index) in posts">
        <v-list-item :key="index">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle
              v-html="item.forumName + '・' + item.school"
            ></v-list-item-subtitle>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.excerpt"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index < posts.length - 1" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return { posts: [], selectedPost: -1 };
  },
  async fetch() {
    this.posts = await this.$axios.$get("/service/api/v2/posts?popular=true&limit=100");
  },
  // call fetch only on client-side
  fetchOnServer: true,
};
</script>
