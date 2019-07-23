/*
What is the HTML DOM?
The HTML DOM is a standard object model and programming interface for HTML. It defines:
  The HTML elements as objects
  The properties of all HTML elements
  The methods to access all HTML elements
  The events for all HTML elements
In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
*/

// browser console (g1)

// ==================== document.querySelector ==================== //

const title = document.querySelector('title');
title.innerHTML = 'yay';

document.querySelector('[class="w3-right w3-hide-small w3-wide toptext"]').style.color = 'red';

document.querySelector('[href="js_intro.asp"]').click();

// tagName, className, id

// ==================== Propriedades ==================== //

// innerHTML
console.log(document.querySelector('#yay').innerHTML);
document.querySelector('#yay').innerHTML += 'yay';

// outerHTML
console.log(document.querySelector('#yay').outerHTML);
document.querySelector('#yay').outerHTML = '';

// value
const email = document.querySelector('input[name=email]').value;

// style
document.querySelector('body').style.color = 'red';

// computedStyle
console.log(window.getComputedStyle(document.querySelector('body')).getPropertyValue('background-color'));

// children
document.querySelector('.w3-example').children

// parentElement
document.querySelector('.w3-example').parentElement

// window.document

// window.alert
alert('yay');

// window.location.href, replace, reload
console.log(window.location.href);
window.location.replace('https://google.com');

// window.localStorage.getItem(), setItem()
window.localStorage.setItem('username', 'L1224rd');

console.log(window.localStorage.getItem('username')); // Li224rd

// ==================== Métodos ==================== //

// getAttribute()
console.log(document.querySelector('[class="w3-right w3-btn"]').getAttribute('href'));

// setAttribute()
document.querySelector('[class="w3-right w3-btn"]').setAttribute('href', 'https://google.com');

// addEventListener()
let clickCount = 0;
document.querySelector('[class="w3-right w3-btn"]').addEventListener('click', (e) => {
	e.preventDefault();
	clickCount++;
	console.log(clickCount);
});

// Dinossauro do chrome
Runner.prototype;
Runner.prototype.gameOver = () => {};
Runner.instance_.setSpeed(200);

// dtbAI, relampago-marquinhos

// Animações (BitArt)
