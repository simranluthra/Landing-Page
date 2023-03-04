/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');



// build the nav

function buildNavigationBar(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        sectiond = section.dataset.nav;
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${sectiond}</a>`);
        navBarList.appendChild(navButton);

        //scroll to section Functionality
        scrollToSection(navButton, section);
    });
}


// calling build the nav function
buildNavigationBar();

// scroll to section
function scrollToSection(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}





// Add class 'active' to section when near top of viewport
function addActiveClass (){
    const active = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top >= 0 && sectionBond.top <= 350){
            section.classList.add("your-active-class");
            active[i].classList.add("active_link");
        } else{
            section.classList.remove("your-active-class");
            active[i].classList.remove("active_link");
        }
    })
}




window.addEventListener('scroll',(event)=>{
    addActiveClass();
})

