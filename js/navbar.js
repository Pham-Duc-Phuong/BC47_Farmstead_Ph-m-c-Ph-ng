var btnsearch = document.getElementById("btnsearch")
var inputsearch123 = document.getElementById("inputsearch123")
btnsearch.onclick = function myfunction() {
    inputsearch123.classList.toggle("showinput");
    btnsearch.classList.toggle("formicon");
};
document.getElementById("btn__collapse").onclick = function () {
    document.getElementById("header__nav").classList.toggle("shownav");
};

