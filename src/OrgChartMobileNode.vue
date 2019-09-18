<template>
    <div v-b-toggle=collapse_id class="d-flex border border-warning p-2 orgChartMobileNode" :class="node_level_class">
        <div class="d-flex flex-column justify-content-center" style="width:50px;">
            <template v-if="hasMoreBranches">
            <i class="when-opened fas fa-caret-down"></i>
            <i class="when-closed fas fa-caret-right"></i>
            </template>
        </div>
        <b-link v-if="hasLink"
            :href="node_data.link"
            v-html="node_data.html"
            class="d-flex flex-column justify-content-center">
        </b-link>
        <div v-else
            v-html="node_data.html"
            class="d-flex flex-column justify-content-center">
        </div>
    </div>
</template>

<script>
import { VBToggle,BLink  } from 'bootstrap-vue';
export default {
    directives:{
      BToggle:VBToggle
    },
    components:{
      VBToggle,
      BLink
    },
    props: {
        node_data: {},
        collapse_id:String,
        hasMoreBranches:Boolean,
        level:Number,
    },
    computed: {
      hasLink: function() {
          return (this.node_data.link != undefined);
      },
      node_level_class:function(){
          return `node_level${this.level} ${this.node_data.classes}`;
      }  
    },
}
</script>


