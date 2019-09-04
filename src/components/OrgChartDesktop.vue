<template>
    <div class="orgChartDesktopWrapper" ref="orgChartDesktopWrapper">
        <ul class="orgChartDesktop" ref="orgChartDesktop">
            <li class="orgChartDesktopRoot orgChartDesktopBranch" :class="orgChart_data.root.branch_classes">
                <OrgChartDesktopNode :node_data="node_data"></OrgChartDesktopNode>
                <OrgChartDesktopBranches :branches="orgChart_data.root.branches"></OrgChartDesktopBranches>
            </li>
        </ul>
    </div>
</template>

<script>
    import OrgChartDesktopBranches from './OrgChartDesktopBranches.vue';
    import OrgChartDesktopNode from './OrgChartDesktopNode.vue';
    import './OrgChartDesktop.css';
    
    export default {
        props:{
            orgChart_data:Object
        },
        components:{
            OrgChartDesktopBranches,
            OrgChartDesktopNode,
        },
        computed:{
            node_data:function(){
                return{
                    classes:this.orgChart_data.root.node_classes,
                    html:this.orgChart_data.root.node_html,
                    link:this.orgChart_data.root.link,
                };
            },
        },
        methods: {
            fitOrgChartWithWrapper: function() {
                const orgchart_wrapper = this.$refs.orgChartDesktopWrapper;
                const orgchart = this.$refs.orgChartDesktop;
                const ratio=orgchart_wrapper.clientWidth / orgchart.clientWidth;
                if (ratio < 1) {
                    orgchart_wrapper.style.setProperty('height',`${orgchart.scrollHeight * ratio}px`);
                    orgchart.style.setProperty('transform',`scale(${ratio})`);
                }else {
                    orgchart.style.setProperty('transform' , 'none');
                    orgchart_wrapper.style.setProperty('height' , 'auto');
                }
            },
            initCSS: function() {
                const orgchart = this.$refs.gldOrgChart;
                if (this.isIE) {  // fix IE render problem
                    orgchart.style.setProperty('transform-origin','top left');
                    orgchart.style.setProperty('display','block');
                }
                if(this.isIOS){  // fix IOS render problem
                    orgchart.querySelectorAll('.gld_org_chart_node').forEach(function(ele){
                        ele.style.setProperty('display','block','important');
                        ele.style.setProperty('height','auto','important');
                    });
                }
                this.fitOrgChartWithWrapper();
            },
        },
        mounted(){
            this.initCSS();
        },
        created(){
            window.addEventListener('load',this.initCSS);
            window.addEventListener('resize', this.fitOrgChartWithWrapper);
        },
        destroyed() {
            window.removeEventListener('load',this.initCSS);
            window.removeEventListener('resize', this.fitOrgChartWithWrapper);
        },
    }
</script>

