// Text typing Animation
var typed = new Typed(".typing", {
    strings:["", "Software engineer", "Java Developer", "Android Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// Aside
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element)
{
    for (let i = 0; i < allSection.length; i++) 
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}
function updateNav(element) 
{
    for (let i = 0; i < totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() 
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
        
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function removeBackSection()
{
    for (let i = 0; i < allSection.length; i++) 
        {
            allSection[i].classList.remove("back-section");
        }
}
const name = document.querySelector("name"),
      email = document.querySelector("email"),
      subj = document.querySelector("subject"),
      mess = document.querySelector("msg");
function sendMsg(e)
            {
                Email.send
                ({
                    Host : "smtp.elasticemail.com",
                    Username : "loliking2k3@gmail.com",
                    Password : "D98E7A03AEC4120CE54DB77C86ABED2DD04D",
                    To : 'hoangchuzz2003@gmail.com',
                    From : "hoangchuzz2003@gmail.com",
                    Subject : name +" "+ subj,
                    Body : mess
                }).then
                    (
                        message => alert(message)
                );
            }
