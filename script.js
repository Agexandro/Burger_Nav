const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");


    burger.onclick = () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `linksFade .4s ease forwards ${index / 2 + .5}s`;
            }
        });
    }
}

navSlide();