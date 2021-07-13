let addToDoButton =document.getElementById('addToDo');
let ToDocontainer =document.getElementById('todocontainer');
let Inputfeild =document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
		var paragraph=document.createElement('p')
		paragraph.innerText = Inputfield.value;
		ToDocontainer.appendChild(paragraph);
		Inputfield.value="";
	})