let enterButton = document.getElementById("enter");
var userInput = document.getElementById("userInput");


console.log(userInput.value)

function createList() {

let list = document.createElement('div');
let newItem = document.createElement('p');
let deleteBtn = document.createElement('button');

list.appendChild(newItem);
list.appendChild(deleteBtn);

list.classList.add('items')
newItem.classList.add('text-item')
newItem.classList.add('delete')
deleteBtn.classList.add('btn')
deleteBtn.classList.add('delete')


deleteBtn.textContent = 'X';


enterButton.addEventListener('click', () => {
     
    deleteBtn.classList.toggle('delete')
    newItem.classList.toggle('delete')
    newItem.textContent = userInput.value;
    userInput.value = '';
 })

 deleteBtn.addEventListener('click', () => {

    deleteBtn.classList.toggle('delete')
    newItem.classList.toggle('delete')
 })


return list;



}



let theList = document.querySelector('.list');

theList.appendChild(createList())