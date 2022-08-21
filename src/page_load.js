import background from './pizza.jpg';

export function initialPageLoad() {
    //Header div
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    document.body.appendChild(header);

    //Title
    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.innerText = 'Pizza Samils'
    header.appendChild(title);

    //Main content div
    const element = document.createElement('div');
    element.classList.add('content');
    document.body.appendChild(element);


    //Background image
    const bgImage = new Image();
    bgImage.src = background;
    bgImage.setAttribute('id', 'backgroundImg')
    element.appendChild(bgImage);

    //Nav buttons
    const navButtons = document.createElement('div');
    navButtons.classList.add('nav-button-container');
    header.appendChild(navButtons);

    const navBtnHome = document.createElement('button');
    navBtnHome.classList.add('nav-button');
    navBtnHome.innerText = 'Home';
    navButtons.appendChild(navBtnHome);

    const navBtnMenu = document.createElement('button');
    navBtnMenu.classList.add('nav-button');
    navBtnMenu.innerText = 'Menu';
    navButtons.appendChild(navBtnMenu);

    const navBtnAbout = document.createElement('button');
    navBtnAbout.classList.add('nav-button');
    navBtnAbout.innerText = 'About';
    navButtons.appendChild(navBtnAbout);


};