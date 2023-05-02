var selected_title = JSON.parse(localStorage.getItem("selected-poem"));
if (!selected_title) {
    selected_title = "moon";
    localStorage.setItem("selected-poem", JSON.stringify(selected_title));
}

// create title
let title = poems[selected_title]["title"];
let title_el = document.createElement("p")
title_el.classList.add("title");
title_el.classList.add("poem-title");
title_el.classList.add("hover-text");
title_el.innerHTML = title;
let poem_text = document.getElementById("poem-text");
poem_text.appendChild(title_el);

// create text
let texts = poems[selected_title]["text-en"];
for (let i = 0; i < texts.length; i ++) {
    let p_el = document.createElement("p")
    p_el.innerHTML = texts[i] + "<br>";
    p_el.classList.add("hover-text");
    poem_text.appendChild(p_el);
}

// create img
let imgs = poems[selected_title]["imgs"];
let alts = poems[selected_title]["imgs-alt"];
let poem_img = document.getElementById("poem-img-container");
for (let i = 0; i < imgs.length; i ++) {
    let img_el = document.createElement("img")
    img_el.src = "images/" + imgs[i];
    img_el.alt = alts[i];
    img_el.classList.add("detail-img");
    poem_img.appendChild(img_el);
}

let left = document.getElementById("return");
left.href = "index.html?poem=" + selected_title;

var id = null;
function slideImg() {  
    let width = screen.width;
    let pos = width;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
        if (pos <= 0.82 * width) {
        clearInterval(id);
        } else {
        pos--; 
        poem_img.style.left = pos + 'px'; 
        }
    }
}
