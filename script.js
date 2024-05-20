const input = document.querySelector('.input');
const itemsList = document.querySelector('#items');

function addItem(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.textContent = input.value;
        newItem.addEventListener('click', toggleItem);
        itemsList.appendChild(newItem);
        input.value = '';
    }
}

function toggleItem() {
    this.classList.toggle('done');
}

input.addEventListener('keydown', addItem);
