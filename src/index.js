import { initialPageLoad } from "./page_load";
import {
    appendContentElement,
    appendHomeContent,
    appendMenuContent,
    appendAboutContent
} from "./content";
import './style.css'

initialPageLoad();
appendContentElement();
appendHomeContent();

//Clear children of content
function clearChildren() {
    const content = document.getElementById('contentCard')
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
}

//Attach eventlistners
const navHomeBtn = document.querySelector('.home-button');
navHomeBtn.addEventListener('click', () => {
    clearChildren();
    appendHomeContent();
});

const navMenuBtn = document.querySelector('.menu-button');
navMenuBtn.addEventListener('click', () => {
    clearChildren();
    appendMenuContent();
});

const navAboutBtn = document.querySelector('.about-button');
navAboutBtn.addEventListener('click', () => {
    clearChildren();
    appendAboutContent();
});


