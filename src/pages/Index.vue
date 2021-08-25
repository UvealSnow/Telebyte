<template>
  <Layout>
    <component  
      v-for="(section, i) in $page.gcms.sections"
      v-bind:section="section"
      :is="section.component"
      :key="i"
    />
  </Layout>
</template>

<script>
import components from '../components/sections/index.js';

export default {
  components,

  metaInfo: {
    title: 'Inicio'
  },
};
</script>


<page-query> 
{
  gcms {
    sections(orderBy: order_ASC) {
      slug
      title
      subtitle
      component
      actionText
    }
  }
}
</page-query>
