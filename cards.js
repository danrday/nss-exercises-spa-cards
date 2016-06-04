
var textBox = document.getElementById("keypress-input");

var cardCreate = document.getElementById("container");

var button = document.getElementById("button");

var cardCounter = 0;

var currentCard = "";

button.addEventListener("click", function() {
  console.log("hello, you clicked a button");
  cardCounter += 1;
  currentCard = `<div id="card-${cardCounter}" class="card"><p class="text">${textBox.value} </p> <input type="button" class="deleteButton" id="delButton-${cardCounter}" value="DELETE BUTTON #${cardCounter}">
    </div>`;

  cardCreate.innerHTML += currentCard;

  var delButtonToString = document.getElementById(`delButton-${cardCounter}`).id.toString();
    console.log(delButtonToString);

  var articleEl = document.getElementsByClassName("deleteButton");

  function handleSectionClick () {
    var parent = document.getElementById("container");
    var child = document.getElementById(event.toElement.parentElement.id)
    parent.removeChild(child);
  }

  for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
  }

});

