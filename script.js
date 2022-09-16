const switchButton = document.getElementById("switch");
switchButton.onclick = () => {
    document.querySelector(".lamp-start").classList.toggle("start-on");
    document.querySelector(".lamp-main").classList.toggle("main-on");
};
