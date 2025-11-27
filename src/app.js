const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-btn")
const submenu = document.querySelector(".submenu")
const bars3 = document.querySelector(".bars3")
const offcanv = document.querySelector(".offcanv")
const overlay = document.querySelector(".overlay")
const offcanvCloseBtn = document.querySelector(".offcanv-close-btn")

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})


submenuBtn.addEventListener("click", (event) => {
    event.target.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu-open")
});

bars3.addEventListener("click", () => {
    offcanv.classList.remove("-right-64");
    overlay.classList.remove("overlay-close");

    offcanv.classList.add("right-0");
    overlay.classList.add("overlay-open");
});

offcanvCloseBtn.addEventListener("click", (event) => {
    console.log(event.target);

    offcanv.classList.remove("right-0");
    overlay.classList.remove("overlay-open");

    offcanv.classList.add("-right-64");
    overlay.classList.add("overlay-close");
})
