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

button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadyStateChange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                document.getElementById("span").innerHTML =counter.toString() ;
            }
        }
    };
    request.open('GET','http://srikasinadhuni.imad.hasura-app.io/counter',true);
    request.send(null);
};