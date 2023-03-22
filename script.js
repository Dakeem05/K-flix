let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");

let next = document.getElementById("proceed");
let back = document.getElementById("back");

let signup = document.getElementById("submit");
let progress = document.getElementById("progress");
let header = document.querySelector("#header")

form1.addEventListener("submit", function(e){
    
  e.preventDefault()
})

form2.addEventListener("submit", function(e){
    
  e.preventDefault()
})
var loader;

function loadNow(opacity){
    if (opacity <= 0) {
        displayContent()
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50)
    }
}


function displayContent () {
    loader.style.display = "none";

    document.getElementById("content").style.display ="block"
}

document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById("loader");
     loadNow(2);        
})


next.addEventListener("click", function(){
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "360px";
});
back.addEventListener("click", function(){
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "180px";
});

signup.addEventListener("click", function(e){


  let passWord = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirmpassword").value
  let formData = {
    realName: document.getElementById("realname").value,
    userName : document.getElementById("username").value,
    mobile : document.getElementById("mobile").value,
    email : document.getElementById("email").value,
    password: passWord,
    confirmPassword: confirm_password,
  };

  let p_check = document.getElementById("p-check");
  let cp_check = document.getElementById("cp-check");
  let matchNote = document.getElementById("match-note");
  
  if (passWord === confirm_password){
    p_check.style.display = "block";
    cp_check.style.display = "block";

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
    header.style.visibility = "visible"
    e.preventDefault(); 
    if(passWord == "" && confirm_password == ""){
      p_check.style.display = "none";
      cp_check.style.display = "none";
    matchNote.style.display = "block";
      
    } else{

      location.href = "./login.html";
    }
  } else {
    matchNote.style.display = "block";
  };
});

let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData")) ;

console.log(mobile);

  
