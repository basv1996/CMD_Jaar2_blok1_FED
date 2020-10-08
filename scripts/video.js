var arrowShowMore = document.querySelector("main section:nth-of-type(1) article > div:nth-of-type(1) > p");
var divShowMetadata = document.querySelector("main section:nth-of-type(1) article > div:last-of-type");
var sectionPublished = document.querySelector("main section:first-of-type > section");
var lastSection = document.querySelector("main section:last-child");
var PrimaryInfoIcons = document.querySelectorAll("main section:first-of-type ul li a svg");
var extraOptions = document.querySelector("header nav a:last-child");
var extraOptionsList = document.querySelector("main > ul");

function showMetaData() {
    arrowShowMore.classList.toggle("active");
    divShowMetadata.classList.toggle("active");
    sectionPublished.classList.toggle("active");
    lastSection.classList.toggle("active");   
}

function showExtraOptions() {
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
            document.querySelector("main section:first-of-type ul li a svg").classList.remove("active");
            Icon.classList.add("active");
        });  
    });
}
makePrimaryInfoBlue();

arrowShowMore.addEventListener("click",showMetaData);
extraOptions.addEventListener("click",showExtraOptions);
overlayElement.addEventListener("click", removeOverlay);