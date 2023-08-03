// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// Hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// Theme color
const AlternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    AlternateStyles.forEach((style) => {
        if( color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style. setAttribute("disabled", "true");
        }
    })
}
//Light mode and Dark mode
const DayNight = document.querySelector(".day-night");
DayNight.addEventListener("click", () => {
    DayNight.querySelector("i").classList.toggle("fa-sun");
    DayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains(".dark"))
    {
        DayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        DayNight.querySelector("i").classList.add("fa-moon");
    }
})