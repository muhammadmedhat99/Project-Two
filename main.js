let btn = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.right = "20px";
    } else {
        btn.style.right = "-40px";
    }
};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
    });
};
