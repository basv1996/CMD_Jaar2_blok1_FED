var arrowShowMore = document.querySelector("main section:nth-of-type(1) > div:nth-of-type(1) > p");
var sectionPublished = document.querySelector("main section:first-of-type > section");

function showMetaData() {
    arrowShowMore.classList.toggle("active");
    sectionPublished.classList.toggle("active");
    
}

arrowShowMore.addEventListener("click",showMetaData)