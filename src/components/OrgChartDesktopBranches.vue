<template>
  <ul class="orgChartDesktopBranches">
      <li v-for="(branch,index) in branches_parsed" class="orgChartDesktopBranch" :class="branch.branch_class" :key="index">
          <OrgChartDesktopNode :node_data="branch.node"></OrgChartDesktopNode>
          <OrgChartDesktopBranches v-if="branch.hasSubBranches" :branches="branch.branches"></OrgChartDesktopBranches>
      </li>
  </ul>
</template> 

<script>
  import OrgChartDesktopBranches from './OrgChartDesktopBranches.vue';
  import OrgChartDesktopNode from './OrgChartDesktopNode.vue';

  export default {
    name:'OrgChartDesktopBranches',
    props:{
      branches:Array
    },
    components:{
      OrgChartDesktopBranches,
      OrgChartDesktopNode,
    },
    computed: {
        branches_parsed: function() {
            return this.branches.map(function(branch) {
                // default assume it is leaf, has no sub branches
                branch.hasSubBranches=false;
                branch.branch_class = 'orgChartDesktopLeaf';
                if (branch.hasOwnProperty('branches')) {
                  // if it has sub branches, it must not a leaf
                  branch.hasSubBranches=true;
                  branch.branch_class = '';
                  if(branch.hasOwnProperty('branches_vertical_breakpoint')) {
                    // the sub branches can be in vertical mode at breakpoints : 
                    // sm, md, lg, xl
                    // all : all breakpoints above
                    branch.branch_class = `orgChartDesktop-${branch.branches_vertical_breakpoint}-vBranch`;
                  }
                }
                return branch;
            });
        },
    },
  }
</script>

