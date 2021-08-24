<template>
  <Layout>
    <div>
      <h1 v-html="$page.gcms.project.title" />
      <p v-html="$page.gcms.project.body" />
      <p>
        {{
          new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format($page.gcms.project.price / 100)
        }}
      </p>
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