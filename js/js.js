
// NAVBAR INTERACTIVE//////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


/* Fermeture du menu si lien vers page a été cliqué  */
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// NAVBAR INTERACTIVE//////////////


window.onscroll = function () {
        if (document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.background="#262626"; 
            document.getElementById("navbar").style.position = "fixed"; 
            }
    
        else {
            document.getElementById("navbar").style.background = "transparent";
        }
        }
    


        //// bouton changement de couleur
function change()
{

    if (document.body.className==='blue'){document.body.className='red'}
    else  
        if(document.body.className==='red'){document.body.className='blue'}

}