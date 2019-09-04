<template>
  <div>
    <OrgChartDesktop class="d-none" :class="desktop_display_class" :orgChart_data="orgChart_data"></OrgChartDesktop>
    <OrgChartMobile class="d-flex" :class="mobile_hidden_class" :orgChart_data="orgChart_data"></OrgChartMobile>
  </div>
</template>

<script>
  import OrgChartDesktop from './OrgChartDesktop.vue';
  import OrgChartMobile from './OrgChartMobile.vue';
  export default {
    props:{
      orgChart_data:Object
    },
    components:{
      OrgChartDesktop,
      OrgChartMobile
    },
    computed:{
      desktop_display_class:function(){
        return `d-${this.orgChart_data.mobile_breakpoint}-flex`;
      },
      mobile_hidden_class:function(){
        return `d-${this.orgChart_data.mobile_breakpoint}-none`;
      }
    }
  }
</script>
