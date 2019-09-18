import OrgChart_foo from './OrgChart.vue';

export function createNode({classes='',html='',link=''}){
    return {
        classes,html,link
    }
}

export const OrgChart=OrgChart_foo;