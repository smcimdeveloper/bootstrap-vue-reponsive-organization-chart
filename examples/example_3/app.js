function createNode({
  classes = "",
  photo = "",
  name = "",
  title = "",
  tel = "",
  email = "",
  duties = ""
}) {
  return {
    classes,
    html
  };
}

const gcio = createNode({
  classes: "gcio",
  photo: "gcio.jpg",
  name: "Mr. Victor Lam, JP",
  title: "Government Chief Information Officer",
  tel:"2810 2611",
  email:"vlam@ogcio.gov.hk"
});

const deputy_commissioner_la = createNode({
  classes: "area2",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area2",
  html: `
        <div class="title">Deputy Commissioner<br>(Labour Administration)</div>
        <div class="person">Miss M Li<br>
        Tel: 2852 4093</div>
        `
});
const deputy_commissioner_osh = createNode({
  classes: "area2",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area2",
  html: `
        <div class="title">Deputy Commissioner<br>(Occupational Safety and Health)</div>
        <div class="person">Mr J Leung<br>
        Tel: 2852 4192</div>
        `
});

const assistant_commissioner_lr = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Labour Relations)</div>
        <div class="person">Ms M Luk<br>
        Tel: 2852 4099</div>
        `
});

const assistant_commissioner_es = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Employment Services)</div>
        <div class="person">Mr C Hui<br>
        Tel: 2852 4102</div>
        `
});

const assistant_commissioner_erb = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Employment's Rights and Benefits)</div>
        <div class="person">Mr S Li<br>
        Tel: 2852 4083</div>
        `
});

const assistant_commissioner_ps = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Policy Support)</div>
        <div class="person">Miss H S Cheung<br>
        Tel: 2852 3633</div>
        `
});

const assistant_commissioner_d = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Development)</div>
        <div class="person">Mr R Ho<br>
        Tel: 2852 4148</div>
        `
});

const assistant_commissioner_os = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Assistant Commissioner<br>(Occupational Safety)</div>
        <div class="person">Mr W H Wu<br>
        Tel: 2852 4070</div>
        `
});

const occupational_health_consultant_1 = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Occupational Health Consultant(1)</div>
        <div class="person">Dr M Y Ho<br>
        Tel: 2852 4183</div>
        `
});

const occupational_health_consultant_2 = createNode({
  classes: "area3",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area3",
  html: `
        <div class="title">Occupational Health Consultant(2)</div>
        <div class="person">Dr Y K Kwan<br>
        Tel: 3543 5713</div>
        `
});

const nobody1 = createNode({
  classes: "nobody_line",
  html: '<div style="height:8em"></div>'
});

const chief_labour_officer_lr = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Labour Officer<br>(Labour Relations)</div>
        <div class="person">Mr R Liang<br>
        Tel: 2852 3457</div>
        `
});

const chief_labour_officer_op = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Labour Officer<br>(Offsetting Policy)</div>
        <div class="person">Miss G Chan<br>
        Tel: 2852 3553</div>
        `
});

const chief_labour_officer_whp = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Labour Officer<br>(Working Hours Policy)</div>
        <div class="person">Mr R Leung<br>
        Tel: 3586 8006</div>
        `
});

const chief_labour_officer_smw = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Labour Officer<br>(Statutory Minimum Wage)<br>Registrar of Trade Unions</div>
        <div class="person">Ms B Ng<br>
        Tel: 2852 3842</div>
        `
});

const chief_occupational_safety_officer_o = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Occupational_Safety_Officer<br>(Operations)</div>
        <div class="person">Mr K L Chan<br>
        Tel: 2852 4176</div>
        `
});

const chief_occupational_safety_officer_ss = createNode({
  classes: "area4",
  link: "https://www.labour.gov.hk/eng/organ/programmen.htm#area4",
  html: `
        <div class="title">Chief Occupational_Safety_Officer<br>(System and Support)</div>
        <div class="person">Mr C P Wan<br>
        Tel: 2852 4963</div>
        `
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
