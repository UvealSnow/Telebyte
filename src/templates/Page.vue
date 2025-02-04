<template>
  <Layout>

    <div class="container mx-auto my-48">
      <h1 class="font-bold text-4xl pb-2" v-text="page.title" />
      <p class="text-lg font-light" v-text="page.brief" />

      <div class="my-8" v-html="page.body.html" />
    </div>
  </Layout>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$page.gcms.page;
    },
  },
}
</script>

<page-query>
  query getPage($slug: String) {
    gcms {
      page(where: {slug: $slug}) {
        title
        brief
        body {
          html
        }
      }
    }
  }
</page-query>