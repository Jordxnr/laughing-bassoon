var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (validation(inputName) && inputPass.value === "StupidPassword345") {
    list.push({
      name: inputName.value
    });
function app(){
  nav();
  initRoot();
  homePage();
}

function nav(){
  var navEle = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.innerHTML="Grade View";
  homeButton.addEventListener("click", function(){
    homePage();
    
  })
  var aboutButton = document.createElement("button");
  aboutButton.innerHTML="Add Grade";
  aboutButton.addEventListener("click", function(){
    aboutPage();
  
  })
  navEle.appendChild(homeButton);
  navEle.appendChild(aboutButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function homePage(){
  document.body.querySelector(".root").innerHTML= ""
  
}

function aboutPage(){
  var name = prompt ("Enter Student name")
  var grade = prompt ("Add a Grade")
  document.body.querySelector(".root").innerHTML= name+ " " + grade;
 
}


app();
    errorDiv.innerHTML = "";
  } else {
    if (!validation(inputName) && inputPass.value === "StupidPassword345") {
      errorDiv.innerHTML = "Name has no text";
    } else if (validation(inputName) && inputPass.value !== "StupidPassword345") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "Enter Name";
    }
  }

  console.log(list);
});

function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}