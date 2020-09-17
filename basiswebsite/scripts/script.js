// JavaScript Document
var searchIcon = document.querySelector("header a:nth-of-type(2)");
var formElement = document.querySelector("header form");
var goBackElement = document.querySelector("header form button:first-of-type");
var overlayElement = document.querySelector("main div:first-of-type");
var footerSection1 = document.querySelector("footer section:nth-of-type(1)");
var footerSection2 = document.querySelector("footer section:nth-of-type(2)");
var footerSection3 = document.querySelector("footer section:nth-of-type(3)");

function displaySearchForm() {
    console.log("hello");
    formElement.classList.add("Activate");
    overlayElement.classList.add("overlay");  
}

function displayHeader() {
formElement.className="";
      overlayElement.className="";
    
}

//function trySwitch() {
//switch() {
//case: 
//}
//}

function addAriaSelected1() {  
    footerSection1.setAttribute("aria-selected", "true");
    footerSection2.setAttribute("aria-selected", "false");
    footerSection3.setAttribute("aria-selected", "false");
}
function addAriaSelected2() {  
    footerSection1.setAttribute("aria-selected", "false");
    footerSection2.setAttribute("aria-selected", "true");
    footerSection3.setAttribute("aria-selected", "false");
}
function addAriaSelected3() {  
    footerSection1.setAttribute("aria-selected", "false");
    footerSection2.setAttribute("aria-selected", "false");
    footerSection3.setAttribute("aria-selected", "true");
}

searchIcon.addEventListener("click", displaySearchForm);
goBackElement.addEventListener("click", displayHeader);
footerSection1.addEventListener("click", addAriaSelected1);
footerSection2.addEventListener("click", addAriaSelected2);
footerSection3.addEventListener("click", addAriaSelected3);