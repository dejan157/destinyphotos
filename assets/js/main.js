var myMenu = [
    { page: "Home", link: "#destiny"},
    { page: "About us", link: "#aboutus" },
    { page: "Testimonials", link: "#testimonials" },
    { page: "Gallery", link: "#gallery" },
    { page: "Contact", link: "#contact" },
    { page: "Author", link: "author.html"}
  ];

function Menu() {
    var container = document.getElementById('navbarSupportedContent');
    var ul = document.createElement("ul");
    // ul.id = "navbar";
    ul.classList.add("navbar-nav", "fw-bold", "justify-content-end", "align-items-center", "flex-grow-1");
  
    myMenu.forEach(element => {
      var li = document.createElement("li");
      li.classList.add("nav-item");
  
      if (element.subMenu) {
        var dropdown = document.createElement("li");
        dropdown.classList.add("nav-item", "dropdown");
  
        var link = document.createElement("a");
        link.classList.add("nav-link", "me-5", "active", "dropdown-toggle", "border-0");
        link.href = element.link;
        link.setAttribute("data-bs-toggle", "dropdown");
        link.setAttribute("aria-expanded", "false");
        link.innerHTML = element.page;
  
        var dropdownMenu = document.createElement("ul");
        dropdownMenu.classList.add("dropdown-menu", "fw-bold");
        element.subMenu.forEach(subElement => {
          var subLi = document.createElement("li");
          var subLink = document.createElement("a");
          subLink.classList.add("dropdown-item");
          subLink.href = subElement.link;
          subLink.innerHTML = `${subElement.page} ${subElement.badge ? `<span class="badge bg-primary">${subElement.badge}</span>` : ""}`;
          subLi.appendChild(subLink);
          dropdownMenu.appendChild(subLi);
        });
  
        dropdown.appendChild(link);
        dropdown.appendChild(dropdownMenu);
        ul.appendChild(dropdown);
      } else {
        var link = document.createElement("a");
        link.classList.add("nav-link", "me-5");
        link.href = element.link;
        link.innerHTML = element.page;

        li.appendChild(link);
        ul.appendChild(li);
      }
    });
  
    container.appendChild(ul);
  }
  
Menu();
   
    
let about4 = [
   { title: "Market analysis", text: "Market analysis is a detailed assessment of your business's target market and the competitive landscape within a specific industry. This analysis lets you project the success you can expect when you introduce your brand and its products to consumers within the market.", icon:"far fa-3x fa-chart-bar text-center tm-icon"},
   { title: "Fast Support", text: "FastSupport is a genuine website that lets you access your computer from another location using their GoToAssist program. Even though this is a legitimate website, cybercriminals use it to make money. GoToAssist lets tech support people look into problems on your computer and fix them remotely.", icon:"far fa-3x fa-chart-bar text-center tm-icon" },
    { title: "Quality", text: "Quality can be defined as conformance to specifications. The degree to which a product meets the design specifications offering a satisfaction factor that fulfils all the expectations that a customer wants.", icon:"fas fa-3x fa-users text-center tm-icon" },
    { title: "Social Work", text: "Social work is a practice-based profession and an academic discipline that promotes social change and development, social cohesion, and the empowerment and liberation of people.", icon:"fas fa-3x fa-users text-center tm-icon"},
    { title: "Safety", text: "Internet safety, also known as online safety, cyber safety and electronic safety (e-safety), refers to the policies, practices and processes that reduce the harms to people that are enabled by the (mis)use of information technology.", icon:"far fa-3x fa-comment-alt text-center tm-icon" },
    { title: "Availability", text: "The noun availability indicates that something is easily obtainable and ready for use. If you are thinking about renting a certain apartment, you might want to ask about the availability of parking spaces in the neighborhood before you sign a lease.", icon:"far fa-3x fa-comment-alt text-center tm-icon"}];

    function aboutUs(){
      var x=document.getElementById("aboutdiv");
      for(let i=0; i<about4.length; i++){
        x.innerHTML+=
        `
          <div class="col-lg-1">
          <i class="${about4[i]["icon"]}"></i>
          </div>
          <div class="col-lg-5">
          <div class="tm-intro-text-container">
          <h2 class="tm-text-primary mb-4">${about4[i]["title"]}</h2>
                <p class="mb-4 tm-intro-text">${about4[i]["text"]}</p>
            </div>
          </div>
          `
        }

      }

aboutUs();

let testimonials2 = [
  { img: "assets/img/testimonial-img-01.jpg", quote: "I always come here because I like their skills.", author: "Catherine Winston (Designer)"},
  { img: "assets/img/testimonial-img-02.jpg", quote: "#destiny", author: "Dual Rocker (CEO)"},
  { img: "assets/img/testimonial-img-03.jpg", quote: "#destiny", author: "Sandra Soft (Marketing)"},
  { img: "assets/img/testimonial-img-04.jpg", quote: "#destiny", author: "Oliva Mendes (Designer)"},
  { img: "assets/img/testimonial-img-02.jpg", quote: "#destiny", author: "Jacob Joker (CTO)"},
];

function test(){
  var pic=document.getElementById("pictures");
  for(let i=0; i<testimonials2.length; i++){
    pic.innerHTML+=
    `
    <figure class="tm-testimonial-item">
      <img src="${testimonials2[i]["img"]}" alt="Image" class="img-fluid mx-auto">
      <blockquote>${testimonials2[i]["quote"]}</blockquote>
      <figcaption${testimonials2[i]["author"]}</figcaption>
    </figure>
    `
    }
  }

test();

let gallery = [
  { a: "assets/img/gallery-img-01.jpg", img: "assets/img/gallery-tn-01.jpg", naslov: "PHYSICAL HEALTH EXERCISE!"},
  { a: "assets/img/gallery-img-02.jpg", img: "assets/img/gallery-tn-02.jpg", naslov: "RAINON GLASS"},
  { a: "assets/img/gallery-img-03.jpg", img: "assets/img/gallery-tn-03.jpg", naslov: "SEAVIEW MEGACITY"},
  { a: "assets/img/gallery-img-04.jpg", img: "assets/img/gallery-tn-04.jpg", naslov: "DREAMGIRL THOUGHTS"},
  { a: "assets/img/gallery-img-05.jpg", img: "assets/img/gallery-tn-05.jpg", naslov: "WORKSTATION OFFICES"},
  { a: "assets/img/gallery-img-06.jpg", img: "assets/img/gallery-tn-06.jpg", naslov: "JUST ABOVE THE CITY"},
  { a: "assets/img/gallery-img-01.jpg", img: "assets/img/gallery-tn-01.jpg", naslov: "ANOTHER EXERCISETIME"},
  { a: "assets/img/gallery-img-02.jpg", img: "assets/img/gallery-tn-02.jpg", naslov: "ANOTHER RAINON GLASS"},
];

function gall(){
  var y=document.getElementById("gallery2");
  for(let i=0; i<gallery.length; i++){
    y.innerHTML+=
    `
    <a href="${gallery[i]["a"]}">
      <figure class="effect-honey tm-gallery-item">
        <img src="${gallery[i]["img"]}" alt="Image 1" class="img-fluid">
        <figcaption>
          <h2><i>${gallery[i]["naslov"]}</i></h2>
        </figcaption>
     </figure>
    </a>
    `
    }
  }

gall();