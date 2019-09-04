<template>
    <div class="flex-column justify-content-center align-items-center w-100">
        <b-btn @click="btn_click">{{btn_label}}</b-btn>
        <div class="orgChartMobile my-3 w-100">
            <OrgChartMobileNode
            :collapse_id="get_root_collapse_id"
            :node_class="orgChart_dataroot.node_class" 
            :node_html="orgChart_dataroot.node_html" 
            :link="orgChart_dataroot.link"
            :hasMoreBranches=true
            :level=0 />
            <orgChartBranches-mobile 
            @collapseChanged="collapsed_changed()"
            :branches="orgChart_dataroot.branches" 
            :parent_collapse_id="get_root_collapse_id"
            :root_collapse_id="get_root_collapse_id"
            :level=1 />
        </div>
    </div>
</template>

<script>
export default {
  methods:{
    id_generator:function() {
      let result = '';
      const length = 10;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
}
</script>

<style scoped>

</style>

