# bootstrap-vue-reponsive-organization-chart
A responsive organisation chart built by bootstrap-vue
## Why I start this
### inspired by another repository 2 CSS files.
I have my own project to create organisation chart on static webpages, and found the repository  https://github.com/zkoss-demo/zk-template-examples has 2 CSS files useful.  
The files are :  
- [src/main/webapp/orgchart/css/orgchart-vertical.css](https://github.com/zkoss-demo/zk-template-examples/blob/master/src/main/webapp/orgchart/css/orgchart-vertical.css)
- [src/main/webapp/orgchart/css/orgchart.css](https://github.com/zkoss-demo/zk-template-examples/blob/master/src/main/webapp/orgchart/css/orgchart.css)

Thanks to [zkoss-demo](https://github.com/zkoss-demo), I copy the CSS rules and use them on my own project. It work, I like to share what I done.

## At a glance what it can do
![At a glance](doc/images/glance.gif)

## Requirement

- [bootstrap-vue v2.0.0](https://bootstrap-vue.js.org/)
- [Vue.js v2.6](https://vuejs.org/)
- [Bootstrap v4.3](https://getbootstrap.com/)

## The component source code
The files are located in folder [src/components](src/components)  
file|what is it
---|---
OrgChartDesktop.css|this contain css rules from 'zk-template-examples'
OrgChartMobile.css|css for the collapsed chart
OrgChart.js|intended to provide utility function, now only has a function createNode
OrgChart.vue
OrgChartDesktop.vue
OrgChartDesktopBranches.vue
OrgChartDesktopNode.vue
OrgChartMobile.vue
OrgChartMobileBranches.vue
OrgChartMobileNode.vue

## How to use



## to do....
+ beautify the example
+ make more example
+ to demo vertical branch
+ empty node
+ json schema for the orgchart data json


