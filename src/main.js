import * as $ from "jquery";

import './main.scss';
import 'bootstrap';

// Load the HTML
import cards from './cards.html';
import buttons from './buttons.html';

// Create and append the HTML to body
const root = document.createElement("div");
root.className = 'content-fluid';
root.innerHTML = cards + buttons;
document.body.appendChild(root);

console.log($);
