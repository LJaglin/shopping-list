//Define user interface variable
const form = document.querySelector('#item-form');
const shoppingList = document.querySelector('.collection');
const clearButton = document.querySelector('clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addItem);
}

function addItem(e) {
    if (itemInput.value === '') {
        alert('Add an item');
    } else {
        //create li element 
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to created li
        li.appendChild(document.createTextNode(itemInput.value));
        //create new link element
        const link = document.createElement('a');
        //add class to created link
        link.className = 'delete-item secondary-content';
        //add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append li to ul
        shoppingList.appendChild(li);

        //clear input
        itemInput.value = '';

        e.preventDefault();
    }
}