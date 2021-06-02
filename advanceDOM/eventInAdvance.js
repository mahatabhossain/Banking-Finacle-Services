//*******************EVENT AND EVENT HANDLERS ******************************** */

//An event is a singnal that is generated by a certain DOM node. ex-click, keydown etc.

const h3 = document.querySelector('h3');

const alertH3 = function (e) {
    console.log('It is just like CSS hover: mouseenter event');
};

//Other way to listining event
// h3.onmouseenter = () => console.log('Other way to listining event.');

h3.addEventListener('mouseenter', alertH3);
//Removing event listiner(in case if we want an event occured only once)
setTimeout(() => h3.removeEventListener('mouseenter', alertH3), 3000);



//************** EVENT PROPAGATION BUBLING AND CAPTURING ****************************** */

//********************************** PAGE NAVIGATION *****************************

// document.querySelectorAll('.nav__link').forEach(function (node) {
//     node.addEventListener('click', function (e) {
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//         console.log(id)
//         console.log('Link clicked');
//         e.preventDefault();
//     })
// })


//NOTE:- Page navigation and Event delegation work same. But only difference is event delegation work
//only when specified selector got clicked.


//*************************** EVENT DELEGATION ********************************** */

// Add event listener to a common parent element.
//Determine what element originated the event. 

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     console.log(e.target);
//     e.preventDefault();

//Matching strategy
//     if (e.target.classList.contains('nav__link')) {
//         const id = e.target.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }
// })


//************************ DOM TRAVERSING ******************************* */

const title = document.querySelector('.section__title');

//--------Going downgrade: child------------

console.log(title);
console.log(title.querySelector('.section__description'));

//It will select everything what title element has.
console.log(title.childNodes); //NodeList
//It will select direct children.
console.log(title.children); //HTML collection

title.firstElementChild.style.color = 'red';

title.lastElementChild.style.color = 'orange';

//------------Going upwards: parent ------------------

console.log(title.parentNode);
console.log(title.parentElement);

//It will select the closest parent element of selected element. It is the opposite of querySelector.
title.closest('.section').style.background = 'lightblue';
// title.closest('h3').style.background = 'blue';

//--------- Going sideways: siblings ------------

console.log(title.previousElementSibling);
console.log(title.nextElementSibling);

console.log(title.previousSibling);
console.log(title.nextSibling);

console.log(title.parentElement.children);
[...title.parentElement.children].forEach(function (el) {
    if (el !== title) el.style.background = 'pink';
})