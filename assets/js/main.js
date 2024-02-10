var myMenu = [
  { 
    page: "Home", 
    link: "#infinite"
  },
  { 
    page: "About us", 
    link: "#aboutus" 
  },
  { 
    page: "Testimonials", 
    link: "#testimonials" 
  },
  { 
    page: "Gallery", 
    link: "#gallery" 
  },
  { 
    page: "Contact", 
    link: "#contact" 
  }
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
  { 
    title: "Market analysis", 
    text: "Market analysis is a detailed assessment of your business's target market and the competitive landscape within a specific industry. This analysis lets you project the success you can expect when you introduce your brand and its products to consumers within the market.", 
    icon:"far fa-3x fa-chart-bar text-center tm-icon"
  },
  { 
    title: "Fast Support", 
    text: "FastSupport is a genuine website that lets you access your computer from another location using their GoToAssist program. Even though this is a legitimate website, cybercriminals use it to make money. GoToAssist lets tech support people look into problems on your computer and fix them remotely.", 
    icon:"far fa-3x fa-chart-bar text-center tm-icon" 
  },
  { 
    title: "Quality", 
    text: "Quality can be defined as conformance to specifications. The degree to which a product meets the design specifications offering a satisfaction factor that fulfils all the expectations that a customer wants.", 
    icon:"fas fa-3x fa-users text-center tm-icon" 
  },
  { 
    title: "Social Work", 
    text: "Social work is a practice-based profession and an academic discipline that promotes social change and development, social cohesion, and the empowerment and liberation of people.", 
    icon:"fas fa-3x fa-users text-center tm-icon"
  },
  { 
    title: "Safety", 
    text: "Internet safety, also known as online safety, cyber safety and electronic safety (e-safety), refers to the policies, practices and processes that reduce the harms to people that are enabled by the (mis)use of information technology.", 
    icon:"far fa-3x fa-comment-alt text-center tm-icon" 
  },
  { 
    title: "Availability", 
    text: "The noun availability indicates that something is easily obtainable and ready for use. If you are thinking about renting a certain apartment, you might want to ask about the availability of parking spaces in the neighborhood before you sign a lease.", 
    icon:"far fa-3x fa-comment-alt text-center tm-icon"
  }
];

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
  { 
    img: "assets/img/testimonial-img-01.jpg", 
    quote: "I always come here because I like their skills. Efficiency and punctuality are hallmarks of their service", 
    author: "Catherine Winston (Designer)"
  },
  { 
    img: "assets/img/testimonial-img-02.jpg", 
    quote: "I enjoy their pictures, I am satisfied! Pricing is fair and transparent - definitely value for money.", 
    author: "Dual Rocker (CEO)"
  },
  { 
    img: "assets/img/testimonial-img-03.jpg", 
    quote: "The product quality is consistently outstanding, exceeding my expectations every time.", 
    author: "Sandra Soft (Marketing)"
  },
  { 
    img: "assets/img/testimonial-img-04.jpg", 
    quote: "They are great at this time when there is so much that is bad", 
    author: "Oliva Mendes (Designer)"
  },
  { 
    img: "assets/img/testimonial-img-02.jpg", 
    quote: "I was completely impressed with their professionalism and customer service. Their staff is highly skilled.", 
    author: "Jacob Joker (CTO)"
  },
];

function test(){
  var pic=document.getElementById("pictures");
  for(let i=0; i<testimonials2.length; i++){
    pic.innerHTML+=
    `
    <figure class="tm-testimonial-item">
      <img src="${testimonials2[i]["img"]}" alt="Image" class="img-fluid mx-auto">
      <blockquote>${testimonials2[i]["quote"]}</blockquote>
      <figcaption>${testimonials2[i]["author"]}</figcaption>
    </figure>
    `
  }
}

test();

let gallery = [
  { 
    a: "assets/img/gallery-img-01.jpg", 
    img: "assets/img/gallery-tn-01.jpg", 
    naslov: "PHYSICAL HEALTH EXERCISE!"
  },
  { 
    a: "assets/img/gallery-img-02.jpg", 
    img: "assets/img/gallery-tn-02.jpg", 
    naslov: "RAINON GLASS"
  },
  { 
    a: "assets/img/gallery-img-03.jpg", 
    img: "assets/img/gallery-tn-03.jpg",
    naslov: "SEAVIEW MEGACITY"
  },
  { 
    a: "assets/img/gallery-img-04.jpg", 
    img: "assets/img/gallery-tn-04.jpg", 
    naslov: "DREAMGIRL THOUGHTS"
  },
  { 
    a: "assets/img/gallery-img-05.jpg", 
    img: "assets/img/gallery-tn-05.jpg", 
    naslov: "WORKSTATION OFFICES"
  },
  { 
    a: "assets/img/gallery-img-06.jpg", 
    img: "assets/img/gallery-tn-06.jpg", 
    naslov: "JUST ABOVE THE CITY"
  },
  { 
    a: "assets/img/gallery-img-01.jpg", 
    img: "assets/img/gallery-tn-01.jpg", 
    naslov: "ANOTHER EXERCISETIME"
  },
  { 
    a: "assets/img/gallery-img-02.jpg", 
    img: "assets/img/gallery-tn-02.jpg", 
    naslov: "ANOTHER RAINON GLASS"
  },
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

var footerLinks = [
  { 
    href: "https://www.twitter.com/", 
    icon: "fa-brands fa-twitter"
  },
  { 
    href: "assets/js/main.js", 
    icon: "fa-brands fa-js" 
  },
  { 
    href: "sitemap.xml", 
    icon: "fa-solid fa-sitemap" 
  },
  { 
    href: "dokumentacija.pdf", 
    icon: "fa-solid fa-file" 
  },
  { 
    href: "author.html", 
    icon: "fa-solid fa-user" 
  }
];

function flinks(){
  var fl=document.getElementById("links");
  for(let i=0; i<footerLinks.length; i++){
    fl.innerHTML+=
    `
    <a class="btn btn-outline-light btn-floating m-1" href="${footerLinks[i]["href"]}" role="button" target="_blank">
      <i class="${footerLinks[i]["icon"]}"></i>
    </a>
    `
  }
}

flinks();


function arrowUp() {
  var scrollToTopBtn = document.getElementById("arrow23");

  let about44=document.getElementById("aboutus");

  if(about44!=null){
    $(about44).waypoint(function() {
      scrollToTopBtn.style.display = "block";
    });
  }

  let op=document.querySelector("#infinite");

  if(op!=null && scrollToTopBtn.style.display=="block"){
    $(op).waypoint(function() {
      scrollToTopBtn.style.display = "none";
    });
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


var objName, objEmail, objMessage, arrOrder, Terms, subm;
var regexName="^[A-Z][a-z]{2,14} [A-Z][a-z]{2,14}$";
var regexEmail= "^[a-z]{2,20}@[a-z]{3,15}\.com$";
var regexMessage = "^([A-Z][a-z]{2,20}\s*)+$";
objName=document.querySelector("#name");
objEmail=document.querySelector("#email");
objMessage=document.querySelector("#message");
arrOrder=document.getElementsByName("gender");
Terms=document.querySelector("#checkbox");
window.onload=function(){
  objName.addEventListener("blur",function(){
        regexValidation(regexName, objName, "Wrong name type");
    }
  );

  objEmail.addEventListener("blur",function(){
        regexValidation(regexEmail, objEmail, "Wrong email type");
    }
  );

  objMessage.addEventListener("blur",function(){
      regexValidation(regexMessage, objMessage, "Wrong message type");
    }
  );

  Terms.addEventListener("click",function(){
      termsValidation();
    }
  );

  let form=document.querySelector("#frm");
  form.onsubmit=validation;
  arrowUp();
}

function validation(){
  if(regexValidation(regexName, objName, "Wrong name type") &&
     regexValidation(regexEmail, objEmail, "Wrong email type") &&
     regexValidation(regexMessage, objMessage, "Wrong message type") &&
     termsValidation()){
     return true;
     }
     return false;
}

function termsValidation(){
  let chbTerms= document.querySelector("#checkbox");
  console.log(chbTerms.parentElement.nextElementSibling);
  if(!chbTerms.checked){
    chbTerms.parentElement.nextElementSibling.classList.remove("d-none");
    chbTerms.parentElement.nextElementSibling.classList.add("d-block");
    chbTerms.parentElement.nextElementSibling.innerHTML="You must accept agreement";
    return false;
  }
  chbTerms.parentElement.nextElementSibling.classList.add("d-none");
  chbTerms.parentElement.nextElementSibling.classList.remove("d-block");
  chbTerms.parentElement.nextElementSibling.innerHTML="";
  return true;
}

function regexValidation(regex, object, error) {console.log(object.nextElementSibling);
  let regex4=new RegExp(regex);
  if(!regex4.test(object.value)){
    object.nextElementSibling.classList.remove("d-none");
    object.nextElementSibling.classList.add("d-block");
    object.nextElementSibling.innerHTML=error;
    return false;
  }
  object.nextElementSibling.classList.remove("d-block");
  object.nextElementSibling.classList.add("d-none");
  object.nextElementSibling.innerHTML="";
  return true;
} 
