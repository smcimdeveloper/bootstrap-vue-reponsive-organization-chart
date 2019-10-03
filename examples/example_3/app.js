const mobile_breakpoint="sm";

function createNode({ classes = "",photo_url="",name="",title="",tel="",email="",duties_link=""  }) {
  classes+=` p-3 p-${mobile_breakpoint}-0 myDefaultNode`;
  const html=`
  <div class="myDesktopNode d-none d-${mobile_breakpoint}-flex flex-column justify-content-center bg-transparent">
    ${photo_url?`<img class="photo img-fluid" src="${photo_url}">`:''}
      <div>
        <span class="name">${name}</span><br>
        ${duties_link?`<a class="title" href="${duties_link}">${title}</a>`:`<span class="title">${title}</span>`}<br>
        <i class="fas fa-phone tel-outer">
        <span class="tel-inner"><a class="tel" href="tel:${tel}">Tel:&nbsp;${tel}</a></span>
        </i>
        <i class="v-line"></i>
        <i class="far fa-envelope email-outer">
        <span class="email-inner"><a class="email" href="mailto:${email}">Email:&nbsp;${email}</a></span>
        </i>
        ${duties_link?`<i class="v-line"></i><a class="duties" href="${duties_link}">Duties</a>`:''}
      </div>
  </div>
  <div class="myMobileNode d-flex d-${mobile_breakpoint}-none">
    ${photo_url?`<img class="photo img-fluid mr-3" src="${photo_url}">`:''}
    <div>
      <span class="name font-weight-bold">${name}</span><br><br>
      ${duties_link?`<a class="title" href="${duties_link}">${title}</a>`:`<span class="title">${title}</span>`}<br>
      <a class="tel" href="tel:${tel}">Tel:&nbsp;${tel}</a><br>
      <a class="email" href="mailto:${email}">Email:&nbsp;${email}</a>
    </div>
  </div>
  `;
  return {
    classes,
    html
  };
}

function createNoBody() {
  return {
    classes: "myNoBodyNode nobody_line"
  };
}

const gcio=createNode({
  classes:'gcio',
  photo_url:'gcio.jpg',
  name:'Mr. Victor Lam, JP',
  title:'Government Chief Informaiton Officer',
  tel:'2810 2611',
  email:'vlam@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/gcio.html'
});

const dgcio=createNode({
  classes:'dgcio',
  name:'Miss Donna Chan',
  title:'Deputy Government Chief Information Officer',
  tel:'2810 2621',
  email : 'donchan@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/dgcio.html'
});

const agcio_csd=createNode({
  classes:'agcio',
  name:'Mr. Jason Pun',
  title:'Assistant Government Chief Information Officer (Cyber Security & Digital Identity)',
  tel: '2810 2623',
  email : 'jskpun@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/agcio_csd.html'
});

const csm_sec=createNode({
  classes:'csm',
  name:'Mr. Tony Wong',
  title:'Chief Systems Manager (Cyber Security)',
  tel: '2867 2036',
  email : 'tkmwong@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_sec.html'
});

const csm_di=createNode({
  classes:'csm',
  name:'Mr. Simon Siu',
  title:'Chief Systems Manager (Digital Identity)',
  tel: '2867 4484',
  email : 'skwsiu@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_di.html'
});

const agcio_inf=createNode({
  classes:'agcio',
  name:'Mr. Donald Mak',
  title:'Assistant Government Chief Information Officer (IT Infrastructure)',
  tel: '2810 2626',
  email : 'dckmak@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/agcio_inf.html'
});

const csm_inf=createNode({
  classes:'csm',
  name:'Mr. KH Poon',
  title:'Chief Systems Manager (IT Infrastructure)',
  tel: '3182 6516',
  email : 'khpoon@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_inf.html'
});

const csm_da=createNode({
  classes:'csm',
  name:'Mr. Anthony Chiu',
  title:'Chief Systems Manager (Data Analytics)',
  tel: '2867 4482',
  email : 'ashchiu@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_da.html'
});

const agcio_gr=createNode({
  classes:'agcio',
  name:'Mr. Kingsley Wong',
  title:'Assistant Government Chief Information Officer (Governance & Resources)',
  tel: '2810 2090',
  email : 'kkmwong@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/agcio_gr.html'
});

const csm_gr=createNode({
  classes:'csm',
  name:'Mr. Gavin Wah',
  title:'Chief Systems Manager (Governance & Resources)',
  tel: '2867 2628',
  email : 'gkkwah@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_gr.html'
});

const csm_io=createNode({
  classes:'csm',
  name:'Mr. Patrick Chan',
  title:'Chief Systems Manager (IT Operations)',
  tel: '2867 4483',
  email : 'pkkchan@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_io.html'
});

const agcio_id=createNode({
  classes:'agcio',
  name:'Mr. Tony Wong, JP',
  title:'Assistant Government Chief Information Officer (Industry Development)',
  tel: '2810 2610',
  email : 'tonywong@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/agcio_id.html'
});

const csm_id=createNode({
  classes:'csm',
  name:'Ms. Chrissie Ng',
  title:'Chief Systems Manager (Industry Development)',
  tel: '2867 2422',
  email : 'cskng@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_id.html'
});

const csm_sc=createNode({
  classes:'csm',
  name:'Mr. Rex Tong',
  title:'Chief Systems Manager (Smart City)',
  tel: '2867 4488',
  email : 'rtong@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_sc.html'
});

const nobody1=createNoBody();

const csm_cs=createNode({
  classes:'csm',
  name:'Mr. Daniel Cheung',
  title:'Chief Systems Manager (Common Services)',
  tel: '2867 4608',
  email : 'dywcheung@ogcio.gov.hk',
  duties_link:'https://www.ogcio.gov.hk/en/about_us/org_chart/csm_cs.html'
});

const cso_ad=createNode({
  classes:'cso',
  name:'Ms. Fiona Li',
  title:'Chief Executive Officer (Administration Division)',
  tel: '2867 5378',
  email : 'fmwli@ogcio.gov.hk'
});

const sta_fd=createNode({
  classes:'sta',
  name:'Ms. Catherine Chu',
  title:'Senior Treasury Accountant (Finance Division)',
  tel: '2582 4493',
  email : 'cspchu@ogcio.gov.hk'
});

const data = {
  orgChart_data: {
    mobile_breakpoint: mobile_breakpoint,
    connector_color:"black",
    root: {
      node:gcio,
      branches:{
        items:[
          {node:dgcio,
          branches:{
            items:[
              {
                node:agcio_csd,                
                branches:{
                  vertical_breakpoint: "*",
                  items:[
                    {node:csm_sec},
                    {node:csm_di}
                  ]
                }
              },
              {
                node:agcio_inf,                
                branches:{
                  vertical_breakpoint: "*",
                  items:[
                    {node:csm_inf},
                    {node:csm_da}
                  ]
                }
              },
              {
                node:agcio_gr,                
                branches:{
                  vertical_breakpoint: "*",
                  items:[
                    {node:csm_gr},
                    {node:csm_io}
                  ]
                }
              },
              {
                node:agcio_id,                
                branches:{
                  vertical_breakpoint: "*",
                  items:[
                    {node:csm_id},
                    {node:csm_sc}
                  ]
                }
              },
              {
                node:nobody1,
                branches:{
                  vertical_breakpoint: "*",
                  items:[
                    {node:csm_cs},
                    {node:cso_ad},
                    {node:sta_fd}
                  ]
                }
              }
            ]
          }}
        ]
      }
    }
  }
};

const app = new Vue({
  el: "#app",
  data
});


