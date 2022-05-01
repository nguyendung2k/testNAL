document.addEventListener("click", function () {

    const menuOpen = document.querySelector(".icon-menu");
    const menuClose = document.querySelector(".icon-close")
    const menu = document.querySelector(".menu");


    menuOpen.addEventListener("click", function () {
        menu.classList.add("is-active");
        console.log('abc')
    });

    menuClose.addEventListener("click", function () {
        menu.classList.remove("is-active");
    })


    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !e.target.matches(".icon-menu")) {
            menu.classList.remove("is-active");
        }
    });
});
