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
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
const addLinks = document.getElementById('navbar__list');

// Creat Fragment to Avoid REFLOW and REPAINT
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// looping over sections and create elements to Append
sections.forEach((sec) => {
   const getLinkText = sec.getAttribute('data-nav');
   const createLink = document.createElement('a');

   const textOfLink = document.createTextNode(getLinkText);
   const createLi = document.createElement('li');

   // Appending
   createLink.appendChild(textOfLink);
   createLi.appendChild(createLink);

   createLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      sec.scrollIntoView({ behavior: 'smooth' });
   });
   fragment.appendChild(createLi);
});

//Appending Elements into Fragment
addLinks.appendChild(fragment);

// Add and Remove Active class if The Section selected by : getBoundingClientRect
const activeClass = () => {
   sections.forEach((sec) => {
      {
         const view = sec.getBoundingClientRect();
         //console.log(view)
         if (view.top <= 150 && view.bottom >= 120) {
            sec.classList.add('your-active-class');
         } else {
            sec.classList.remove('your-active-class');
            document.querySelector('a').classList.remove('new');
         }
      }
   });
};

// Listen to EVENT to active function activeClass
document.addEventListener('scroll', () => {
   activeClass();
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
