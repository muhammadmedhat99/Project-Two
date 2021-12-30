let btn = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
    });
};
