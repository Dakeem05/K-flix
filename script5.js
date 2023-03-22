let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));

let movies = document.getElementById("movies");
let romance = document.getElementsByClassName("romance");
let action = document.getElementsByClassName("action");
let horror = document.getElementsByClassName("horror");
let sci_fi = document.getElementsByClassName("sci-fi");
let comedy = document.getElementsByClassName("comedy");

let categories = document.getElementById("categories");
let cover = document.getElementById("cover");
let choose = document.getElementById("choose");
let r_btn = document.getElementById("r-btn");
let a_btn = document.getElementById("a-btn");
let h_btn = document.getElementById("h-btn");
let s_btn = document.getElementById("s-btn");
let c_btn = document.getElementById("c-btn");
let genre = document.getElementsByClassName("genre");

let alert = document.getElementById("alert");
let genre_back = document.getElementById("genre_back");
let genre_next = document.getElementById("genre_next");

let r_m = document.getElementById("r-m");
let a_m = document.getElementById("a-m");
let h_m = document.getElementById("h-m");
let s_m = document.getElementById("s-m");
let c_m = document.getElementById("c-m");
back_movies.addEventListener("click", function(){
    location.href = "./movies.html";
})
r_btn.addEventListener("click",function(){
    r_btn.style.backgroundColor = "#434242e9"
    r_m.style.display = "grid";
    categories.style.display = "none";
    back_movies.style.display = "block";
});
a_btn.addEventListener("click",function(){
    a_btn.style.backgroundColor = "#434242e9"
    a_m.style.display = "grid";
    categories.style.display = "none";
    back_movies.style.display = "block";
});
h_btn.addEventListener("click",function(){
    h_btn.style.backgroundColor = "#434242e9"
    h_m.style.display = "grid";
    categories.style.display = "none";
    back_movies.style.display = "block";
});
s_btn.addEventListener("click",function(){
    s_btn.style.backgroundColor = "#434242e9"
    s_m.style.display = "grid";
    categories.style.display = "none";
    back_movies.style.display = "block";
});
c_btn.addEventListener("click",function(){
    c_btn.style.backgroundColor = "#434242e9"
    c_m.style.display = "grid";
    categories.style.display = "none";
    back_movies.style.display = "block";
});