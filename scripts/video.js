var arrowShowMore = document.querySelector("main section:nth-of-type(1) article > header > p");
var divShowMetadata = document.querySelector("main section:nth-of-type(1) article > div");
var sectionPublished = document.querySelector("main section:first-of-type > section");
var lastSection = document.querySelector("main section:last-child");
var PrimaryInfoIcons = document.querySelectorAll("main section:first-of-type article ul li a svg");
var extraOptions = document.querySelector("header nav a:last-child");
var extraOptionsList = document.querySelector("main > ul");

console.log(PrimaryInfoIcons);

function showMetaData() {
    arrowShowMore.classList.toggle("active");
    divShowMetadata.classList.toggle("active");
    sectionPublished.classList.toggle("active");
    lastSection.classList.toggle("active");   
}

function showExtraOptions() {
    accountSection.toggleAttribute("hidden");
    overlayElement.classList.add("overlay");
    extraOptionsList.classList.add("active");
}

function removeOverlay() {
overlayElement.className="";
extraOptionsList.className="";
   
}


function makePrimaryInfoBlue() {
        PrimaryInfoIcons.forEach(function(Icon){
        Icon.addEventListener("click", function() {
//            document.querySelector("svg.active").classList.remove("active");
//            if(Icon.classList.contains("active")){
//               Icon.className= "";
//            console.log("testing");
//            }
//              Icon.classList.add("active");
            if(Icon.classList.contains("active")){
                Icon.classList.remove("active");
            }
            else {
                 Icon.classList.add("active");
            };  
        });  
    });
}
makePrimaryInfoBlue();

arrowShowMore.addEventListener("click",showMetaData);
extraOptions.addEventListener("click",showExtraOptions);
overlayElement.addEventListener("click", removeOverlay);