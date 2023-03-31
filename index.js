// remove main#main
document.querySelector('main#main').remove();

// create new header
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
