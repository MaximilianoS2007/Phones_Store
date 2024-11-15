let popup = document.getElementById("popup");
let iframe = document.getElementById("iframe-content");
let redirectUrl = "";

function showPopup(url) {
    iframe.src = url;
    popup.style.display = "block";
    redirectUrl = url;
}

function hidePopup() {
    popup.style.display = "none";
}

function keepPopup() {
    popup.style.display = "block";
}

function redirectToPage(url = null) {
    if (url) {
        window.open(url, "_self");
    } else if (redirectUrl) {
        window.open(redirectUrl, "_self");
    }
}