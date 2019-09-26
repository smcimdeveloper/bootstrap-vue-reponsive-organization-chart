function createNode({
  classes = "",
  title = "",
  name = "",
  tel = "",
  link = ""
}) {
  const html = `
  <div class="title">${title}</div>
  <div class="person">
  ${name}<br>
  Tel: ${tel}
  </div>
  `;
  return {
    classes,
    html,
    link
  };
}

function createNoBody({ height }) {
  const html = `
  <div style="height:${height}"></div>
  `;
  return {
    classes: "nobody_line",
    html
  };
}

const commissioner = createNode({
  classes: "area1",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area1",
  title:"Commissioner for Labour",
  name:"Mr C Chan",
  tel:"2852 3688"
});

const deputy_commissioner_la = createNode({
  classes: "area2",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area2",
  title:"Deputy Commissioner<br>(Labour Administration)",
  name:"Miss M Li",
  tel:"2852 4093"
});
const deputy_commissioner_osh = createNode({
  classes: "area2",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area2",
  title:"Deputy Commissioner<br>(Occupational Safety and Health)",
  name:"Mr J Leung",
  tel:"2852 4192"
});

const assistant_commissioner_lr = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Labour Relations)",
  name:"Ms M Luk",
  tel:"2852 4099"
});

const assistant_commissioner_es = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Employment Services)",
  name:"Mr C Hui",
  tel:"2852 4102"
});

const assistant_commissioner_erb = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Employment's Rights and Benefits)",
  name:"Mr S Li",
  tel:"2852 4083"
});

const assistant_commissioner_ps = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Policy Support)",
  name:"Miss H S Cheung",
  tel:"2852 3633"
});

const assistant_commissioner_d = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Development)",
  name:"Mr R Ho",
  tel:"2852 4148"
});

const assistant_commissioner_os = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Assistant Commissioner<br>(Occupational Safety)",
  name:"Mr W H Wu",
  tel:"2852 4070"
});

const occupational_health_consultant_1 = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Occupational Health Consultant(1)",
  name:"Dr M Y Ho",
  tel:"2852 4183"
});

const occupational_health_consultant_2 = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  title:"Occupational Health Consultant(2)",
  name:"Dr Y K Kwan",
  tel:"3543 5713"
});

const nobody1 = createNoBody({height:"8em"});

const chief_labour_officer_lr = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Labour Officer<br>(Labour Relations)",
  name:"Mr R Liang",
  tel:"2852 3457"
});

const chief_labour_officer_op = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Labour Officer<br>(Offsetting Policy)",
  name:"Miss G Chan",
  tel:"2852 3553"
});

const chief_labour_officer_whp = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Labour Officer<br>(Working Hours Policy)",
  name:"Mr R Leung",
  tel:"3586 8006"
});

const chief_labour_officer_smw = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Labour Officer<br>(Statutory Minimum Wage)<br>Registrar of Trade Unions",
  name:"Ms B Ng",
  tel:"2852 3842"
});

const chief_occupational_safety_officer_o = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Occupational_Safety_Officer<br>(Operations)",
  name:"Mr K L Chan",
  tel:"2852 4176"
});

const chief_occupational_safety_officer_ss = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  title:"Chief Occupational_Safety_Officer<br>(System and Support)",
  name:"Mr C P Wan",
  tel:"2852 4963"
});

const data = {
  orgChart_data: {
    mobile_breakpoint: "sm",
    connector_color: "black",
    root: {
      node: commissioner,
      branches: {
        items: [
          {
            node: deputy_commissioner_la,
            branches: {
              items: [
                {
                  node: assistant_commissioner_lr,
                  branches: {
                    vertical_breakpoint: "lg",
                    items: [
                      {
                        node: chief_labour_officer_lr
                      },
                      {
                        node: chief_labour_officer_op
                      }
                    ]
                  }
                },
                {
                  node: assistant_commissioner_es
                },
                {
                  node: assistant_commissioner_erb
                },
                {
                  node: assistant_commissioner_ps,
                  branches: {
                    items: [
                      {
                        node: chief_labour_officer_whp
                      }
                    ]
                  }
                },
                {
                  node: assistant_commissioner_d,
                  branches: {
                    items: [
                      {
                        node: chief_labour_officer_smw
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            node: deputy_commissioner_osh,
            branches: {
              items: [
                {
                  node: assistant_commissioner_os,
                  branches: {
                    items: [
                      {
                        node: chief_occupational_safety_officer_o
                      }
                    ]
                  }
                },
                {
                  node: nobody1,
                  branches: {
                    items: [
                      {
                        node: chief_occupational_safety_officer_ss
                      }
                    ]
                  }
                },
                {
                  node: occupational_health_consultant_1
                },
                {
                  node: occupational_health_consultant_2
                }
              ]
            }
          }
        ]
      }
    }
  }
};

const app = new Vue({
  el: "#app",
  data
});
