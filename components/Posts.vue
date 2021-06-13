<template>
  <v-list three-line>
    <template v-for="(item, index) in posts">
      <v-list-item :key="item.id">
        <v-list-item-content>
          <v-row class="mx-lg-16">
            <v-col :cols="item.mediaMeta['0'] !== undefined ? '8' : '12'">
              <v-list-item-subtitle
                v-html="
                  item.forumName +
                  '・' +
                  (item.school !== undefined ? item.school : '匿名')
                "
              ></v-list-item-subtitle>
              <v-list-item-title
                class="my-2 text-pre-wrap"
                v-html="item.title"
              ></v-list-item-title>
              <v-list-item-subtitle
              class="text-pre-wrap"
                v-html="item.excerpt"
              ></v-list-item-subtitle>
            </v-col>
            <v-col
              class="tw-grid"
              v-if="item.mediaMeta['0'] !== undefined"
              cols="4"
            >
              <v-img
                class="rounded"
                position="center center"
                :lazy-src="item.mediaMeta['0'].thumbnail"
                :src="item.mediaMeta['0'].thumbnail"
                aspect-ratio="1"
                max-width="250"
              ></v-img>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < posts.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return { posts: [], selectedPost: -1 };
  },
  async fetch() {
    this.posts = await this.$axios.$get(
      "/service/api/v2/posts?popular=true&limit=100"
    );
  },
  // call fetch only on client-side
  fetchOnServer: true,
};
</script>
