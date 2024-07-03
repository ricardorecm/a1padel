document.addEventListener("DOMContentLoaded", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    var mobileMenuNav = document.getElementById("mobile-menu-nav");

    mobileMenu.addEventListener("click", function () {
        if (mobileMenuNav.style.maxHeight === "0px" || mobileMenuNav.style.maxHeight === "") {
            mobileMenuNav.style.maxHeight = mobileMenuNav.scrollHeight + "px";
        } else {
            mobileMenuNav.style.maxHeight = "0";
        }
    });
});
