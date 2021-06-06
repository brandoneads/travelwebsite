const navClick = () => {
    const mobile = document.querySelector(".mobile");
    const nav = document.querySelector(".menu-links");
    const menuLinks = document.querySelectorAll(".menu-links li");
   
    mobile.addEventListener("click", () => {
        nav.classList.toggle("menu-active");


        menuLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{   
            link.style.animation = `menuLinkFade 0.5 ease forwards ${ index / 7 + 1.5}s`;
            }
        });
    });
        
}

navClick();