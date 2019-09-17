<template>
  <b-collapse :id="parent_collapse_id" :class="branches_class" @shown="collapse_isopen(true)" @hidden="collapse_isopen(false)">
      <div v-for="(branch,index) in branches_parsed" :key="index">
          <orgChartMobileNode
          v-if="false==branch.nobody"
          :collapse_id="branch.collapse_id"
          :node_data="branch.node"
          :hasMoreBranches="branch.hasMoreBranches"
          :level="level">
          </orgChartMobileNode>
          <orgChartMobileBranches
          :boxes_status="boxes_status"
          @collapseChanged="collapsedChangedEmit2parent()"
          v-if="branch.hasMoreBranches"
          :branches="branch.branches"
          :parent_collapse_id="branch.nobody?parent_collapse_id:branch.collapse_id"
          :level="branches_level_next">
          </orgChartMobileBranches>
      </div>
  </b-collapse>
</template>

<script>
  import OrgChartMobileBranches from './OrgChartMobileBranches.vue';
  import OrgChartMobileNode from './OrgChartMobileNode.vue';
  import { BCollapse } from 'bootstrap-vue';

  export default {
    name:'OrgChartMobileBranches',
    components:{
      OrgChartMobileBranches,
      OrgChartMobileNode,
      BCollapse
    },
    props: {
        boxes_status:Object,
        branches: Array,
        parent_collapse_id:String,
        level:Number,
    },
    computed: {
      branches_parsed: function() {
          return this.branches.map(branch=>{
              branch.collapse_id=this.boxes_status.id_generator();
              branch.hasMoreBranches=branch.hasOwnProperty('branches');
              branch.nobody=branch.node.classes.includes('nobody_line');
              if (branch.hasMoreBranches && false==branch.nobody) this.boxes_status.addId(branch.collapse_id);
              return branch;
          });
      },
      branches_class:function(){
          return `branches_level${this.level}`;
      },
      branches_level_next:function(){
          return this.level + 1;
      },

    },
    methods:{
        collapse_isopen:function(isopen){
            this.boxes_status.update(this.parent_collapse_id,isopen);
            this.$emit('collapseChanged');
        },
        collapsedChangedEmit2parent(){
            this.$emit('collapseChanged');
        }
    },
  }
</script>

