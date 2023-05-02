// go to correct poem description according to menu
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const poem = params.get('poem');
var excerptEn = poems[poem]["excerpt-en"];
var imageFile = poems[poem]["imgs"][0];
var imageAlt = poems[poem]["imgs-alt"][0];
document.getElementById("poem-img").src = "images/" + imageFile;
document.getElementById("poem-img").alt = imageAlt;
document.getElementById("exerpt-text").innerHTML = excerptEn;
