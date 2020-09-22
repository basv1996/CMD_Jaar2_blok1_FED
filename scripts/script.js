// JavaScript Document
var searchIcon = document.querySelector("header a:nth-of-type(2)");
var formElement = document.querySelector("header form");
var goBackElement = document.querySelector("header form button:first-of-type");
var overlayElement = document.querySelector("main div:first-of-type");

var footerSection1 = document.querySelector("footer section:nth-of-type(1)");
var footerSection2 = document.querySelector("footer section:nth-of-type(2)");
var footerSection3 = document.querySelector("footer section:nth-of-type(3)");
var footerSections = document.querySelectorAll("footer section");

var contentCreatorProfileImg = document.querySelectorAll("main section div a:nth-of-type(2) img");
var accountButton = document.querySelector("header nav a:last-child");
var accountSection = document.querySelector("header section");
var removeAccSection = document.querySelector("header section ul li:first-child svg");

var threeDots = document.querySelectorAll("main section div > p");
//var threeDots = document.querySelector("main section div > p");
var menuItemAdd2WatchLater = document.querySelector("main div:nth-of-type(2)");


var navBar = document.querySelector("header");


function displaySearchForm() {
    formElement.classList.add("Activate");
    overlayElement.classList.add("overlay");  
}

function displayHeader() {
formElement.className="";
      overlayElement.className="";  
}

function displayAccount() {
accountSection.toggleAttribute("hidden");
}

function addAnimation() {
    contentCreatorProfileImg.forEach(function (singleProfileImage) {
       singleProfileImage.addEventListener("click", function () {
           singleProfileImage.classList.add("animate");
           setTimeout(function () {
               singleProfileImage.className = "";
           }, 1000);
       })
   })
}
addAnimation();

function add2watchLater() {
    threeDots.forEach(function (dot) {
        dot.addEventListener("click", function (){
         overlayElement.classList.add("overlay");  
    menuItemAdd2WatchLater.toggleAttribute("hidden");
            
            if(overlayElement.addEventListener("click", function() {
        overlayElement.className = "";
        menuItemAdd2WatchLater.setAttribute("hidden", true);
                }));
            })
        })
    }
add2watchLater();


function removeHeaderOnScroll() {
   
}

function makeIconsRed() {
    footerSections.forEach(function(section){
        section.addEventListener("click", function() {
        section.setAttribute("aria-selected", "true");
        })  
        if(section.hasAttribute("aria-selected='true'")){
            console.log("hello")
        
        }
    })
    }

makeIconsRed();


//function addAriaSelected1() {  
//    footerSection1.setAttribute("aria-selected", "true");
//    footerSection2.setAttribute("aria-selected", "false");
//    footerSection3.setAttribute("aria-selected", "false");
//}
//function addAriaSelected2() {  
//    footerSection1.setAttribute("aria-selected", "false");
//    footerSection2.setAttribute("aria-selected", "true");
//    footerSection3.setAttribute("aria-selected", "false");
//}
//function addAriaSelected3() {  
//    footerSection1.setAttribute("aria-selected", "false");
//    footerSection2.setAttribute("aria-selected", "false");
//    footerSection3.setAttribute("aria-selected", "true");
//}

searchIcon.addEventListener("click", displaySearchForm);
goBackElement.addEventListener("click", displayHeader);
accountButton.addEventListener("click", displayAccount);
removeAccSection.addEventListener("click", displayAccount);
    
//threeDots.addEventListener("click", add2watchLater);
    
//footerSection1.addEventListener("click", addAriaSelected1);
//footerSection2.addEventListener("click", addAriaSelected2);
//footerSection3.addEventListener("click", addAriaSelected3);
//contentCreatorProfileImg.addEventListener("click", addAnimation);