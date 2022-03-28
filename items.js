function enlargeImage(x) {
    x.style.height = "22.5vh";
    x.style.width = "37.5vh";
}

function shrinkImage(x) {
    x.style.height = "15vh";
    x.style.width = "25vh";
}

function itemClick(x) {
    if (x == 1) {
        window.location.href = "saul";
    }
    if (x == 2) {
        alert("item 2 clicked");
    }
}