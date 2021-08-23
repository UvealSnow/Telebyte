<template>
  <div class="layout font-body min-h-screen">
    <page-header />
    <slot/>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import PageFooter from '~/components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
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

