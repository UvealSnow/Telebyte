<template>
  <div class="layout">
    <page-header :contact-data="computedContactData" />
    <slot/>
    <page-footer :contact-data="computedContactData" />
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

  computed: {
    computedContactData() {
      console.log(this.$static.gcms.contacts[0])
      return this.$static.gcms.contacts[0];
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
  gcms {
    contacts(first: 1) {
      email
      emailAction
      phone
      phoneAction
      address
      schedule
      whatsApp
      whatsappAction
    }
  }
}
</static-query>

<style lang="scss">
.layout {
  @apply font-body min-h-screen overflow-x-hidden;
}
</style>
