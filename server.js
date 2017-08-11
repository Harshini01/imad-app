var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'mindspeaks' :{
    title:'mindspeaks | Harshini',
    heading :'My mind Speaks',
    date:'August 11 2018',
    content:` <p>
                    To Infinity and beyond--Toy story
                </p>
                <p>
                    To Infinity and beyond--Toy story
                </p>
                <p>
                    To Infinity and beyond--Toy story
                </p>`
    
},
    'article-two':{title:'article-two | Harshini',
    heading :'My Second article',
    date:'August 13 2018',
    content:` <p>
                    hungry duck
                </p>
                <p>
                    hangry
                </p>
                <p>
                    really happy
                </p>`},
    'article-three':{
        title:'article-three | Harshini',
        heading :'My third article',
        date:'August 16 2018',
        content:` <p>
                        globalisation
                    </p>
                    <p>
                        sleep
                    </p>
                    <p>
                        plumcake
                    </p>`
            
    }
};
function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`<html>
        <head>
            <title>${title}</title>
            <meta name ="viewport" conent="width-device-width , initial-sacle=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
            <style>
                
            </style>
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>${date}</div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>`
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)
{
     res.send(createTemplate(articles[articleName]));
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
