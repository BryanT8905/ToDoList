var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var mylist = document.getElementById("myList");




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	deleteButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
 }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
 }
}


function toggleDone(e) {
	var target = event.target;
	//store the element that is the target
	var deletebtn = target.getElementsByClassName("delbtn")[0];
	//accessing the delete button
	if (target.matches("li")) {
	//because the event listener is being added to the ul, this
	//ensures the right element is being clicked. 
	//this is saying make sure target is an li and if so do something
		target.classList.toggle("done") 
	}

}


function deleteButton(listItems) {
	var btn = document.createElement("button");
	btn.classList.add("delbtn");
	btn.appendChild(document.createTextNode("Remove"));
 	listItems.appendChild(btn);


 	btn.addEventListener("click", function() {
 		listItems.parentNode.removeChild(listItems);
 	})

};

for (let i = 0; i < listItems.length; i++) {
		deleteButton(listItems[i]);
	}

 	


	



	

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

mylist.addEventListener("click", toggleDone);
//adding the event to the ul(mylist) instead of each 
//individual li. the ul watches what is clicked
