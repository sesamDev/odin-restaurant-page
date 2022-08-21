import pizzaChef from './pizza-chef.jpeg'

export function appendContentElement() {
    const element = document.createElement('div');
    element.setAttribute('id', 'contentCard');
    const content = document.querySelector('.content');
    content.appendChild(element);

};

export function appendHomeContent() {
    //Main content card
    const content = document.getElementById('contentCard');

    //Creating home content
    //Title
    const title = document.createElement('h2');
    title.innerText = "Welcome to Pizzeria Samils"
    content.appendChild(title)

    //Image
    const chef = new Image();
    chef.src = pizzaChef;
    content.appendChild(chef);

    //Text
    const text = document.createElement('p');
    text.innerText = 'The finest pizzas since 1656.'
    content.appendChild(text);

};

