let enterButton = document.getElementById("enter");
var userInput = document.getElementById("userInput");
let listUl = document.querySelector("ul");


function inputLength(){
	return userInput.value.length;
} 


console.log(userInput.value)

function createList() {


let newItem = document.createElement('li');
newItem.appendChild(document.createTextNode(userInput.value));
listUl.appendChild(newItem);
userInput.value = '';

let newButton = document.createElement('button')
newButton.appendChild(document.createTextNode("X"));
newItem.appendChild(newButton)


function deleteItem() {

   newItem.classList.add('delete')
}

function doneItem() {

   newItem.classList.add('done')
}



newButton.addEventListener('click', deleteItem)
newItem.addEventListener('click', doneItem)

}




enterButton.addEventListener("click", () => {
	if (inputLength() > 0) { 
		createList();
	}
});

userInput.addEventListener("keypress", (event) => {
	if (inputLength() > 0 && event.which === 13) { 
		createList();
	}
});


