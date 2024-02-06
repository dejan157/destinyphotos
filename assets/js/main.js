var myMenu = [
    { page: "Home", link: "#infinite"},
    { page: "About us", link: "#aboutus" },
    { page: "Testimonials", link: "#testimonials" },
    { page: "Gallery", link: "#gallery" },
    { page: "Contact", link: "#contact" }
  ];

function Menu(){
  var m=document.getElementById("navbarSupportedContent");
  for(let i=0; i<myMenu.length; i++){
    m.innerHTML+=
    `
    <li class="nav-item">
      <a class="nav-link tm-nav-link" href="${myMenu[i]["link"]}">${myMenu[i]["page"]}</a>
    </li>
      `
    }
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
  { img: "assets/img/testimonial-img-01.jpg", quote: "I always come here because I like their skills. Efficiency and punctuality are hallmarks of their service", author: "Catherine Winston (Designer)"},
  { img: "assets/img/testimonial-img-02.jpg", quote: "I enjoy their pictures, I am satisfied! Pricing is fair and transparent - definitely value for money.", author: "Dual Rocker (CEO)"},
  { img: "assets/img/testimonial-img-03.jpg", quote: "The product quality is consistently outstanding, exceeding my expectations every time. I highly recommend this business.", author: "Sandra Soft (Marketing)"},
  { img: "assets/img/testimonial-img-04.jpg", quote: "They are great at this time when there is so much that is bad", author: "Oliva Mendes (Designer)"},
  { img: "assets/img/testimonial-img-02.jpg", quote: "I was completely impressed with their professionalism and customer service. Their staff is not only friendly but also highly skilled.", author: "Jacob Joker (CTO)"},
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

function arrowUp() {
  var scrollToTopBtn = document.getElementById("arrow");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {
  arrowUp();
};

var objName, objEmail, objOrderDdl, arrOrder, arrTerms;

var reFullname=/^([A-Z][a-z]{2,14}){1,3}$/;
var reEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reCity = /^([A-Z][a-z]{2,14})+$/;

window.onload=function(){
	
	submitBtn = document.querySelector("#btn-order");
	submitBtn.addEventListener("click", formValidationOnSubmit);


    objName=document.querySelector("#name");
    objEmail=document.querySelector("#email");
    arrOrder=document.getElementsByName("gender");
    arrTerms=document.getElementsByName("terms");


    objName.addEventListener("blur",function(){
        regexValidation(reFullname, objName);
    });

    objEmail.addEventListener("blur",function(){
        regexValidation(reEmail, objEmail);
    });

    createDdl();
	
    let ddl=document.querySelector("#order-method");
    ddl.addEventListener("click",checkDdl);

    submitBtn.addEventListener("click", formValidationOnSubmit);
}

function formValidationOnSubmit(){
    regexValidation(reFullname, objName);
    regexValidation(reEmail, objEmail);

    checkDdl();

    let chbTerms= document.querySelector("#terms");
    try{
        if(!chbTerms.checked){
            chbTerms[0].nextElementSibling.nextElementSibling.classList.remove("d-none");
            chbTerms[0].nextElementSibling.nextElementSibling.classList.add("d-block");
            throw("Niste procitali uslove koriscenja!");
        }
        else{
            chbTerms[0].nextElementSibling.nextElementSibling.classList.add("d-none");
            chbTerms[0].nextElementSibling.nextElementSibling.classList.remove("d-block");
            chbTerms[0].nextElementSibling.nextElementSibling.innerHTML="";
        }
    }
    catch(error) {
				chbTerms.nextElementSibling.nextElementSibling.innerHTML=error;
    }
}

function regexValidation(re, obj) {
    try {
        if (!re.test(obj.value)) {
            obj.nextElementSibling.classList.remove("d-none");
            obj.nextElementSibling.classList.add("d-block");

            if (obj == objName) {
                throw "It must contain at least one capital letter and a maximum of 15 lowercase letters.";
            } else if (obj == objEmail) {
                throw "Incorrect email address, an example of how it should look..";
            }
        } else {
            obj.previousElementSibling.classList.remove("d-inline");
            obj.previousElementSibling.classList.add("d-none");
            obj.nextElementSibling.classList.remove("d-block");
            obj.nextElementSibling.classList.add("d-none");
            obj.nextElementSibling.innerHTML = "";
        }
    } catch (err) {
        obj.previousElementSibling.classList.remove("d-none");
        obj.previousElementSibling.classList.add("d-inline");
        obj.nextElementSibling.innerHTML = err;
    }
}
