// JavaScript Document
var searchIcon = document.querySelector("header a:nth-of-type(2)");
var formElement = document.querySelector("header form");
var goBackElement = document.querySelector("header form button:first-of-type");
var overlayElement = document.querySelector("main div:first-of-type");

function displaySearchForm() {
    console.log("hello");
    formElement.classList.add("Activate");
    overlayElement.classList.add("overlay");  
}

function displayHeader() {
formElement.className="";
      overlayElement.className="";
    
}

searchIcon.addEventListener("click", displaySearchForm);
goBackElement.addEventListener("click", displayHeader);