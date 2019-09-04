<template>

    <OrgChart :orgChart_data="orgChart_data"></OrgChart>

</template>

<script>

    import OrgChart from '../components/OrgChart.vue';

    const orgChart_data= {
    mobile_breakpoint:'sm',
    root: {
        node_classes: "director",
        node_html: `
            <div class="d-flex">
                <div style="flex-basis:25%" class="mr-3">
                <img src="/assets/gld.gov.hk/images/gld-logo.svg" class="img-fluid"></img>
                </div>
                <div>
                    <div class="title">Director of Government Logistics</div>
                    <div>Miss Mary CHOW</div>
                    <a href="tel:+852-22315100">2231 5100</a>
                </div>
            </div>
            `,
        branches: [
        {
            vertical_breakpoint: "md",
            node_classes: "director",
            node_html: `
                    <div class="title">Deputy Director of Government Logistics</div>
                    <div>Miss Helen TANG</div>
                    <a href="tel:+852-22315101">2231 5101</a>
                    `,
            branches: [
            {
                node_classes: "division",
                link: "administration-division/",
                node_html: `
                            <div class="title">Administration Division</div>
                            <div>Tony WONG</div>
                            <div>Departmental Secretary</div>
                            <a href="tel:+852-22315115">2231 5115</a>
                            <div>&nbsp;</div>
                            <div>Accounts Section</div>
                            <div>Ms Doris CHEUNG</div>
                            <div>Senior Treasury Accountant</div>
                            <a href="tel:+852-22315168">2231 5168</a>
                            `
            },
            {
                node_classes: "division",
                link: "management-services-division/",
                node_html: `
                            <div class="title">Management Services Division</div>
                            <div>Supplies Surveys and Stock Verification Section</div>
                            <div>Ms Cherry CHOI</div>
                            <div>Principal Supplies Officer</div>
                            <a href="tel:+852-22315345">2231 5345</a>
                            <div>&nbsp;</div>
                            <div>Systems Administration Section</div>
                            <div>Ms Mary LEUNG</div>
                            <div>Controller (Land Transport)</div>
                            <a href="tel:+852-22315147">2231 5147</a>
                            `
            },
            {
                node_classes: "division",
                link: "procurement-division/",
                node_html: `
                            <div class="title">Procurement Division</div>
                            <div>Ms Tina LEUNG</div>
                            <div>Controller (Procurement)</div>
                            <a href="tel:+852-22315226">2231 5226</a>
                            `
            },
            {
                node_classes: "division ",
                link: "supplies-management-division/",
                node_html: `
                            <div class="title">Supplies Management Division</div>
                            <div>Miss Annie CHEUNG</div>
                            <div>Controller (Supplies Management)</div>                        
                            <a href="tel:+852-22312108">2231 5108</a>
                            `
            },
            {
                node_classes: "division ",
                link: "printing-division/",
                node_html: `
                            <div class="title">Printing Division</div>
                            <div>Ms Alice CHAN</div>
                            <div>Controller (Printing Services)</div>
                            <a href="tel:+852-25649502">2564 9502</a>
                            `
            },
            {
                node_classes: "division ",
                link: "land-transport-division/",
                node_html: `
                            <div class="title">Land Transport Division</div>
                            <div>Ms Mary LEUNG</div>
                            <div>Controller (Land Transport)</div>
                            <a href="tel:+852-22315147">2231 5147</a>
                            `
            }
            ]
        }
        ]
    }
    };


    export default {
        components:{
            OrgChart
        },
        data: function(){
                return {
                    orgChart_data
                }
            }
            
        
    };
</script>
