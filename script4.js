let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));

let email_retrieve = document.getElementById("email_retrieve");
let view = document.getElementById("view");
let retrieve = document.getElementById("retrieve");
let report = "Wrong Email";

retrieve.addEventListener("click", function(){
    if(email_retrieve.value === email){
        view.innerHTML = confirmPassword;
    } else {
        view.innerHTML = report;
        location.reload();
    }
});
