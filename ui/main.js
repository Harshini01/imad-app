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
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                document.getElementById("span").innerHTML =counter+" times" ;
            }
        }
    };
    request.open('GET','http://srikasinadhuni.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    //make a request to server and send name.
       var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var names =request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                }
                var ul = document.getElementById("namelist");
                ul.innerHTML = list;
            }
        }
    };
  var nameInput = document.getElementById("name");
    var name = nameInput.value;
    //capture a list of names and render it
    request.open('GET','http://srikasinadhuni.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
   
};