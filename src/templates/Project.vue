<template>
  <Layout>
    <div>
      <h1 v-html="$page.gcms.project.title" />
      <p v-html="$page.gcms.project.body" />
    </div>
  </Layout>
</template>

<page-query>
query getProject($slug: String) {
  gcms {
    project(where: {slug: $slug}) {
      title
      body
      image {
        id
        url
      }
    }
  }
}
</page-query>