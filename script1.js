// var button = document.getElementsByTagName("button")[1];
//
// button.addEventListener("mouseleave", function () {
//     console.log("CLICK");
// })

var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getElementById("userinput");

function inputValueLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addLIAfterClick(){
    if (inputValueLength() > 0) {
        createListElement();
    }
}
function addLIAfterKeypress(){
    // console.log(event);
    if (inputValueLength() && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addLIAfterClick);

input.addEventListener("keypress", addLIAfterKeypress);