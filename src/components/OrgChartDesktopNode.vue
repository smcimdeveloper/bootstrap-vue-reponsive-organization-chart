<template>
      
  <b-link v-if="hasLink" :class="node_data.classes" :href="node_data.link" class="orgChartDesktopNode" v-html="node_data.html">
  </b-link>
  <div v-else :class="node_data.classes"  class="orgChartDesktopNode" v-html="node_data.html">
  </div>

</template>

<script>
  import { BLink } from 'bootstrap-vue';

  export default {
    props:{
      node_data: Object,
    },
    computed: {
      hasLink: function() {
          return (this.node_data.link != undefined);
      },
    },
    components:{
      BLink
    }
  }
</script>
