/*console.log('Loaded!');

//Change the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'Harshini Loves herself';

//Move the image of madi on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
  var interval = setInterval(moveright,50);
};*/

//Change texxt on Button click

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
   /* var request = new XMLHttpRequest();
    request.onReadyStateChange = function(){
        if(request.readyState === XMLHttpRequestDONE)
    }*/
    counter = counter+1;
    var span = document.getElementById("value");
    span.innerHTML = counter.toString();
};