// JavaScript Document
var searchIcon = document.querySelector("header a:nth-of-type(2)");
var formElement = document.querySelector("header form");
var goBackElement = document.querySelector("header form button:first-of-type");
var overlayElement = document.querySelector("main div:first-of-type");

var footerSecArticles = document.querySelectorAll("footer section article");

var contentCreatorProfileImg = document.querySelectorAll("main section article> header a:nth-of-type(2) img");
var accountButton = document.querySelector("header nav a:last-child");
var accountSection = document.querySelector("header section");
var removeAccSection = document.querySelector("header section ul li:first-child a");

var threeDots = document.querySelectorAll("main section article header > p span");
var menuItemAdd2WatchLater = document.querySelector("main div:nth-of-type(2)");



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
       });
   });
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
            });
        });
    }
add2watchLater();


function removeHeaderOnScroll() {   
}

function makeIconsRed() {
    footerSecArticles.forEach(function(article){
        article.addEventListener("click", function() {
            document.querySelector("article.active").classList.remove("active");
            article.classList.add("active");
            console.log("hello");
        });  
    });
}

makeIconsRed();


searchIcon.addEventListener("click", displaySearchForm);
goBackElement.addEventListener("click", displayHeader);
overlayElement.addEventListener("click",displayHeader);
accountButton.addEventListener("click", displayAccount);
removeAccSection.addEventListener("click", displayAccount);  