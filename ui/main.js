console.log('Loaded!');

//Change the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'Harshini Loves herself';

//Move the image of madi on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveright(){
    marginleft = marginleft+10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
  var interval = setInterval(moveright,100);
};