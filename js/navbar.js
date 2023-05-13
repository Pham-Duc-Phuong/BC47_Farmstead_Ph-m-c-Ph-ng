var btnsearch = document.getElementById("btnsearch")
btnsearch.onclick = function () {
    document.getElementById("inputsearch").classList.add("showinput");
};
btnsearch.onclick = function () {
    btnsearch.classList.toggle("formicon");
};
document.getElementById("btn__collapse").onclick = function () {
    document.getElementById("header__nav").classList.toggle("shownav");
};

