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
deleteBtn.classList.add('btn')

newItem.textContent = userInput.value;
deleteBtn.textContent = 'X';


enterButton.addEventListener('click', (ele) => {

    list.classList.toggle('items')
 })


return list;



}



let theList = document.querySelector('.list');

theList.appendChild(createList())