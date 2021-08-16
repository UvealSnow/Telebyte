<template>
  <div class="layout font-body bg-red-300 min-h-screen">
    <page-header />
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

