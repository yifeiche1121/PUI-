// change colorTheme 
var colorTheme;
var poem_list = ["moon", "cloud", "spring", "glance", "invitation"];
function changeColorTheme(e) {
    if (e.id == "white-button") {
        colorTheme = "white";
        localStorage.setItem("color-theme", JSON.stringify(colorTheme));
    }
    if (e.id == "black-button") {
        colorTheme = "black";
        localStorage.setItem("color-theme", JSON.stringify(colorTheme));
    }
    if (e.id == "pink-button") {
        colorTheme = "pink";
        localStorage.setItem("color-theme", JSON.stringify(colorTheme));
    }
    drawColorTheme();
    
}

function drawColorTheme() {
    colorTheme = JSON.parse(localStorage.getItem("color-theme"));
    if (!colorTheme) {
        colorTheme = "white";
        localStorage.setItem("color-theme", JSON.stringify(colorTheme));
    }
    let colorChanges = document.getElementsByClassName('color-changes');
    let white = document.getElementById("white-button");
    let black = document.getElementById("black-button");
    let pink = document.getElementById("pink-button");
    white.style.border = "none";
    black.style.border = "none";
    pink.style.border = "none";
    let as = document.getElementsByTagName('a');
    if (colorTheme == "white") {
        white.style.border = "black solid 2px";
        document.body.style.background = "white";
        document.body.style.color = "black";
        for (let i = 0; i < as.length; i ++) {
            as[i].style.color = "black";
        }
        for (let i = 0; i < colorChanges.length; i ++) {
            colorChanges[i].className = 'color-changes green-bg';
        }
    }
    if (colorTheme == "black") {
        black.style.border = "white solid 2px";
        document.body.style.background = "#2E2E2E";
        document.body.style.color = "white";
        for (let i = 0; i < as.length; i ++) {
            as[i].style.color = "white";
        }
        for (let i = 0; i < colorChanges.length; i ++) {
            colorChanges[i].className = 'color-changes dark-green-bg';
        }
    }
    if (colorTheme == "pink") {
        pink.style.border = "black solid 2px";
        document.body.style.background = "#FFE1EA";
        document.body.style.color = "black";
        for (let i = 0; i < as.length; i ++) {
            as[i].style.color = "black";
        }
        for (let i = 0; i < colorChanges.length; i ++) {
            colorChanges[i].className = 'color-changes green-bg';
        }
    }
}


// Update title in menu
var selected_title;

function updateTitle(e) {
    if (e.className == "selected title") {
        return;
    }
    selected_title = e.id;
    localStorage.setItem("selected-poem", JSON.stringify(selected_title));
}

function drawTitle() {
    for (let i = 0; i < poem_list.length; i ++) {
        let title = poem_list[i];
        let prev = document.getElementById(title);
        let prevRec = "rec-" + prev.id;
        let prevTitle = "title-" + prev.id;
        let prev_recE = document.getElementById(prevRec);
        let prev_titleE = document.getElementById(prevTitle);
        prev_recE.className = "";
        prev_titleE.classList.remove("selected-title");
        prev.classList.remove("selected");
    }
    selected_title = JSON.parse(localStorage.getItem("selected-poem"));
    if (!selected_title) {
        selected_title = "moon";
        localStorage.setItem("selected-poem", JSON.stringify(selected_title));
    }
    let e = document.getElementById(selected_title);
    e.className = "selected title";
    let recId = "rec-" + e.id;
    let titleId = "title-" + e.id;
    let recE = document.getElementById(recId);
    let titleE = document.getElementById(titleId);
    recE.className = "color-changes green-bg";
    titleE.className = "selected-title";
}

function drawAll() {
    drawColorTheme();
    drawTitle();
}