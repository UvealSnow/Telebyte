<template>
  <div class="layout font-body">
    <page-header />
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <slot/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.layout {
  @apply bg-red-300 h-screen;
}
</style>
