const navClick = () => {
    const mobile = document.querySelector(".mobile");
    const nav = document.querySelector(".menu-links");
    const menuLinks = document.querySelectorAll(".menu-links li");
   
    mobile.addEventListener("click", () => {
        nav.classList.toggle("menu-active");
    });

    menuLinks.forEach((link, index) => {
        console.log(index);
    });
}

navClick();