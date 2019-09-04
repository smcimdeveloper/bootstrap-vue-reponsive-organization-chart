<template>

    <OrgChart :orgChart_data="orgChart_data"></OrgChart>

</template>

<script>

    import OrgChart from '../../src/components/OrgChart.vue';

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
                    <div class="title">Director of Ones Memory</div>
                    <div>Miss May CHAN</div>
                    <a href="tel:+852-12345678">1234 5678</a>
                </div>
            </div>
            `,
        branches: [
        {
            vertical_breakpoint: "md",
            node_classes: "director",
            node_html: `
                    <div class="title">Deputy Director of Ones Memory</div>
                    <div>Miss Elen TANG</div>
                    <a href="tel:+852-12345678">1234 5678</a>
                    `,
            branches: [
            {
                node_classes: "division",
                link: "administration-division/",
                node_html: `
                            <div class="title">Administration Division</div>
                            <div>Tony LAI</div>
                            <div>Departmental Secretary</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            <div>&nbsp;</div>
                            <div>Accounts Section</div>
                            <div>Ms Doris SUMMER</div>
                            <div>Senior Treasury Accountant</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            `
            },
            {
                node_classes: "division",
                link: "management-services-division/",
                node_html: `
                            <div class="title">Management Services Division</div>
                            <div>Supplies Surveys and Stock Verification Section</div>
                            <div>Ms Cherry LIU</div>
                            <div>Principal Supplies Officer</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            <div>&nbsp;</div>
                            <div>Systems Administration Section</div>
                            <div>Ms Mary HO</div>
                            <div>Controller (Land Transport)</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            `
            },
            {
                node_classes: "division",
                link: "procurement-division/",
                node_html: `
                            <div class="title">Procurement Division</div>
                            <div>Ms Tracy LEUNG</div>
                            <div>Controller (Procurement)</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            `
            },
            {
                node_classes: "division ",
                link: "supplies-management-division/",
                node_html: `
                            <div class="title">Supplies Management Division</div>
                            <div>Miss Annie LAM</div>
                            <div>Controller (Supplies Management)</div>                        
                            <a href="tel:+852-12345678">1234 5678</a>
                            `
            },
            {
                node_classes: "division ",
                link: "printing-division/",
                node_html: `
                            <div class="title">Printing Division</div>
                            <div>Ms Angus CHAN</div>
                            <div>Controller (Printing Services)</div>
                            <a href="tel:+852-12345678">1234 5678</a>
                            `
            },
            {
                node_classes: "division ",
                link: "land-transport-division/",
                node_html: `
                            <div class="title">Land Transport Division</div>
                            <div>Ms May LAM</div>
                            <div>Controller (Land Transport)</div>
                            <a href="tel:+852-12345678">1234 5678</a>
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
