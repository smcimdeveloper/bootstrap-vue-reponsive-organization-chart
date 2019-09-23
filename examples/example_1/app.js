function createNode({ classes = "", html = "", link = "" }) {
  return {
    classes,
    html,
    link
  };
}

const director = createNode({
  classes: "director",
  html: `
        <div class="d-flex">
            <div style="flex-basis:25%" class="mr-3">
            <img src="./android19.png" style="max-height:100px" class="img-fluid"></img>
            </div>
            <div>
                <div class="title">Director of Ones Memory</div>
                <div>Miss May CHAN</div>
                <a href="tel:+852-12345678">1234 5678</a>
            </div>
        </div>        
        `
});

const deputy_director = createNode({
  classes: "director",
  html: `
        <div class="title">Deputy Director of Ones Memory</div>
        <div>Miss Elen TANG</div>
        <a href="tel:+852-12345678">1234 5678</a>
        `
});

const admin = createNode({
  classes: "division",
  html: `
        <div class="title">Administration Division</div>
        <div>Tony LAI</div>
        <div>Departmental Secretary</div>
        <a href="tel:+852-12345678">1234 5678</a>
        <div>&nbsp;</div>
        <div>Accounts Section</div>
        <div>Ms Doris SUMMER</div>
        <div>Senior Treasury Accountant</div>
        <a href="tel:+852-12345678">1234 5678</a>
        `,
  link: "administration-division/"
});

const management = createNode({
  classes: "division",
  html: `
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
        `,
  link: "management-services-division/"
});

const procurement = createNode({
  classes: "division",
  html: `
        <div class="title">Procurement Division</div>
        <div>Ms Tracy LEUNG</div>
        <div>Controller (Procurement)</div>
        <a href="tel:+852-12345678">1234 5678</a>
        `,
  link: "procurement-division/"
});

const supplies = createNode({
  classes: "division ",
  link: "supplies-management-division/",
  html: `
        <div class="title">Supplies Management Division</div>
        <div>Miss Annie LAM</div>
        <div>Controller (Supplies Management)</div>                        
        <a href="tel:+852-12345678">1234 5678</a>
        `
});
const printing = createNode({
  classes: "division ",
  link: "printing-division/",
  html: `
        <div class="title">Printing Division</div>
        <div>Ms Angus CHAN</div>
        <div>Controller (Printing Services)</div>
        <a href="tel:+852-12345678">1234 5678</a>
        `
});

const land_transport = createNode({
  classes: "division ",
  link: "land-transport-division/",
  html: `
        <div class="title">Land Transport Division</div>
        <div>Ms May LAM</div>
        <div>Controller (Land Transport)</div>
        <a href="tel:+852-12345678">1234 5678</a>
        `
});

const data = {
  orgChart_data: {
    mobile_breakpoint: "sm",
    root: {
      node: director,
      branches: {
        items: [
          {
            node: deputy_director,            
            branches: {
              vertical_breakpoint: "md",
              items:[
                {
                  node: admin
                },
                {
                  node: management
                },
                {
                  node: procurement
                },
                {
                  node: supplies
                },
                {
                  node: printing
                },
                {
                  node: land_transport
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
