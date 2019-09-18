<template>
    <div class="flex-column justify-content-center align-items-center w-100">
        <b-button @click="btn_click">{{btn_label}}</b-button>
        <div class="orgChartMobile my-3 w-100">
            <OrgChartMobileNode
            :collapse_id="get_root_collapse_id"
            :node_data="orgChart_data.root.node" 
            :hasMoreBranches=true
            :level=0></OrgChartMobileNode>
            <orgChartMobileBranches 
            :boxes_status="boxes_status"
            @collapseChanged="collapsed_changed()"
            :branches="orgChart_data.root.branches" 
            :parent_collapse_id="get_root_collapse_id"
            :level=1 ></OrgChartMobileBranches>
        </div>
    </div>
</template>

<script>
  import OrgChartMobileBranches from './OrgChartMobileBranches.vue';
  import OrgChartMobileNode from './OrgChartMobileNode.vue';
  import {BButton} from 'bootstrap-vue';
  
  export default {
    props:{
      orgChart_data:Object
    },
    data:function(){
      return{
        root_collapse_id:'',
        btnState:'showall',
        boxes_status:{
          ids:{},
          vue:{},
          addId:function(id){
              this.ids[id]={isopen:false};
          },
          showall:function(){
              const ids=this.ids;
              const vue=this.vue;
              Object.keys(ids).forEach(key=>{
                  if (false==ids[key]['isopen']) vue.$root.$emit('bv::toggle::collapse',key);
              });
          },
          hideall:function(){
              const ids=this.ids;
              const vue=this.vue;
              Object.keys(ids).forEach(key=>{
                  if (ids[key]['isopen']) vue.$root.$emit('bv::toggle::collapse',key);
              });
          },
          update:function(id,isopen){
              this.ids[id]['isopen']=isopen;
          },
          btnState:function(){
              let result='hideall';
              Object.keys(this.ids).forEach(key=>{
                  if (false==this.ids[key]['isopen']) result='showall';
              });
              return result;
          },
          id_generator:function() {
            let result = '';
            const length = 10;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          },
        }
      }
    },

    components:{
      OrgChartMobileBranches,
      OrgChartMobileNode,
      BButton,
    },
    methods:{
      btn_click:function(){
        if ('showall'==this.btnState)
            this.boxes_status.showall();
        else
            this.boxes_status.hideall();
      },
      collapsed_changed:function(){
          this.btnState=this.boxes_status.btnState();
      },
    },
    computed:{
      get_root_collapse_id:function(){
        if (this.root_collapse_id) return this.root_collapse_id;
        this.root_collapse_id=this.boxes_status.id_generator();
        this.boxes_status.addId(this.root_collapse_id);
        return this.root_collapse_id;
      },
      btn_label:function(){
          const label={
              showall:'Show All',
              hideall:'Hide All',
          };
          return label[this.btnState];
      },
    },
    created(){
      this.boxes_status.vue=this;
    }
  }
</script>

<style>

.orgChartMobile .collapsed > div > .when-opened,
.orgChartMobile :not(.collapsed) > div > .when-closed {
    display: none;
}

.orgChartMobile{
    border:8px solid green;
}

.orgChartMobile .branches_level1{
    border:8px solid red;
}

.orgChartMobile .branches_level2{
    border:4px solid orange;
}

.orgChartMobile .branches_level3{
    border:2px solid gold;
}

.orgChartMobile .node_level1{
    padding-left:1em!important;
}

.orgChartMobile .node_level2{
    padding-left:2em!important;
}

.orgChartMobile .node_level3{
    padding-left:3em!important;
}



</style>

