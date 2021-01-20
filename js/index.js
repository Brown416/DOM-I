const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const codeImgtop = document.getElementById('cta-img');

codeImgtop.src = 'img/header-img.png';

const navbar=document.querySelectorAll('a');
console.log(navbar);
navbar[0].textContent= siteContent["nav"]["nav-item-1"]

navbar[1].textContent= siteContent["nav"]["nav-item-2"]

navbar[2].textContent= siteContent["nav"]["nav-item-3"]

navbar[3].textContent= siteContent["nav"]["nav-item-4"]

navbar[4].textContent= siteContent["nav"]["nav-item-5"]

const ctabuttonthing = document.querySelector("button");
ctabuttonthing.textContent= siteContent["cta"]["button"]


//need to come back and fix the font because what the fuck 
const domText = document.querySelector("h1",);
domText.textContent = "Dom Is Awesome!"
//so I guess this part works
const otherimage = document.getElementById("middle-img");
otherimage.src= 'img/mid-page-accent.jpg';

const h4titles = document.querySelectorAll('h4')
h4titles[0].textContent = siteContent["main-content"]["features-h4"];
h4titles[1].textContent = siteContent["main-content"]["about-h4"]
h4titles[2].textContent = siteContent["main-content"]["services-h4"]
h4titles[3].textContent = siteContent["main-content"]["product-h4"]
h4titles[4].textContent = siteContent["main-content"]["vision-h4"];
h4titles[5].textContent = siteContent["contact"]["contact-h4"];

const ptop= document.querySelectorAll(".top-content p");
ptop[0].textContent = siteContent["main-content"]["features-content"]
ptop[1].textContent = siteContent["main-content"]["about-content"]

const bTop = document.querySelectorAll(".bottom-content p");
bTop[0].textContent = siteContent["main-content"]["services-content"]
bTop[1].textContent = siteContent["main-content"]["product-content"]
bTop[2].textContent = siteContent["main-content"]["vision-content"]

const fastTalk = document.querySelectorAll(".contact p");
fastTalk[0].textContent = siteContent["contact"]["address"]
fastTalk[1].textContent = siteContent["contact"]["phone"]
fastTalk[2].textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer p")
footer.textContent= siteContent["footer"]["copyright"];

const backgroundcolor = document.querySelector("header");
backgroundcolor.style.background = "red"
               
const newLink = document.createElement('a')
newLink.textContent = 'New Link'
newLink.classList.add('a-link')
const nav = document.querySelector('nav')
nav.prepend(newLink)
const newLink2 = document.createElement('a')
newLink2.textContent = 'New Link 2'
newLink2.classList.add('a-link')
const nav2 = document.querySelector('nav') 
nav2.appendChild(newLink2)

navbar.forEach(element => {
  element.style.color = 'green';
})