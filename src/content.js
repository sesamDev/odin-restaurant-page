
export function appendContentElement() {
    const element = document.createElement('div');
    element.setAttribute('id', 'contentCard');
    const content = document.querySelector('.content');
    content.appendChild(element);

};

