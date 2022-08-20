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
    element.appendChild(bgImage);

};