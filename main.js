var varButton = [];
var Equals = 0;

function alertButtonValue(event){
  var button = event.target;
  console.log(button);
  var text = button.textContent;
  varButton.push(text);
  console.log(varButton);
  
}

[].forEach.call(document.querySelectorAll('.keypad-button'), function(element){
  element.addEventListener('click', alertButtonValue);
}, false);


function alertEquals(event){
  var str = varButton.join("");
  console.log(str);
  Equals = eval(str);
  console.log(Equals);
  alert(Equals);
}

[].forEach.call(document.querySelectorAll('.equals'), function(element){
  element.addEventListener('click', alertEquals);
}, false);

function alertClear(event){
  Equals = 0;
  varButton = [];
  console.log(varButton);
  alert(Equals);
}

[].forEach.call(document.querySelectorAll('.ac'), function(element){
  element.addEventListener('click', alertClear);
}, false);
