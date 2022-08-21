import pizzaChef from './pizza-chef.jpeg'
import pizzaMenuImg from './pizza-menu.jpeg'
import map from './map.jpg';

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

export function appendMenuContent() {
    //Main content card
    const content = document.getElementById('contentCard');

    //Creating home content
    //Title
    const title = document.createElement('h2');
    title.innerText = "The amazing menu"
    content.appendChild(title)

    //Image
    const pizza = new Image();
    pizza.src = pizzaMenuImg;
    content.appendChild(pizza);

    //Text
    const pizzas = [
        'Margharita',
        'Vesuvio',
        'Calzone',
        'Tefat',
        'Kebab pizza',
        'Gyros pizza',
        'Viking pizza'
    ]

    for (let i = 1; i < pizzas.length; i++) {
        const element = pizzas[i];
        let menuItem = document.createElement('p');
        menuItem.classList.add('menu-item');
        menuItem.innerText = `${i}. ${element}`;
        content.appendChild(menuItem);

    }

};

export function appendAboutContent() {
    //Main content card
    const content = document.getElementById('contentCard');

    //Creating home content
    //Title
    const title = document.createElement('h2');
    title.innerText = "About Pizzeria Samils"
    content.appendChild(title)

    //Image
    const mapImg = new Image();
    mapImg.src = map;
    content.appendChild(mapImg);

    //Text
    const contact = document.createElement('p');
    contact.innerText = 'Contact'
    content.appendChild(contact);

    const phone = document.createElement('p');
    phone.innerText = '+46 123456789'
    content.appendChild(phone);

    const mail = document.createElement('p');
    mail.innerText = 'pizzaSamils@pizzasamils.com'
    content.appendChild(mail);

};

