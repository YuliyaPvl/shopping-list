
const input = document.querySelector('.input-wrapper');
const itemsList = document.querySelector('#items');

function addItem(event) {
    if (event === 'Enter' && input.textContent.trim() !==''){
        const newItem = document.createElement('div');
        newItem.value = input.textContent;
        newItem.addEventListener('click', toggleItem);
        itemsList.appendChild(newItem);
        input.textContent='';
    }
}

function toggleItem(){
    this.classList.toggle('done');
}

input.addEventListener('keydown', addItem);