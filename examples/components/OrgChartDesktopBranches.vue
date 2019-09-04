<template>
  <ul class="orgChartDesktopBranches">
      <li v-for="(branch,index) in branches_parsed" class="orgChartDesktopBranch" :class="branch.branch_class" :key="index">
          <OrgChartDesktopNode :node_data="branch.node_data"></OrgChartDesktopNode>
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
                if ('branches' in branch) {
                  // if it has sub branches, it must not a leaf
                  branch.hasSubBranches=true;
                  branch.branch_class = '';
                  if('vertical_breakpoint' in branch) {
                    // the sub branches can be in vertical mode at breakpoints : 
                    // sm, md, lg, xl
                    // all : all breakpoints above
                    branch.branch_class = `orgChartDesktop-${branch.vertical_breakpoint}-vBranch`;
                  }
                }
                branch.node_data={
                  classes:branch.node_classes,
                  html:branch.node_html,
                  link:branch.link,
                };
                return branch;
            });
        },
    },
  }
</script>

