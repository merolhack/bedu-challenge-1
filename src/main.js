const $ = jQuery = require("jquery");

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

// jQuery document ready
$(document).ready(function () {
    console.log($(".buddy"));
    $('#like').on('click', function () {
        $('#card1').addClass('rotate-left').delay(700).fadeOut(1);
        $('#buddy1').find('.status').remove();
    });
    $('#dislike').on('click', function () {
        $('#card2').addClass('rotate-right').delay(700).fadeOut(1);
        $('#buddy2').find('.status').remove();
    });
});
