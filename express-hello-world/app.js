const express = require('express');

//Create a server called app
//App will handle our requests and responses
const app = express();

//Make everything inside public available
app.use(express.static('public'));

//Express needs to know where the views live
app.set('views', __dirname + '/views');
//Tell express we are using hbs
app.set('view engine', 'hbs');

//Routes GET -> is a http verb that
//means we are retrieving data
app.get('/', (request, response) => {
    //response.sendFile(__dirname + '/views/index.html');

    //Will come from a database eventually
    let data = {
        name: 'Miguel',
        bootcamp: 'Web Dev',
        address: 'Planet earth',
        isAuthenticated: true,
        city: 'Lisbon',
        cities: ['Amsterdam', 'Barcelona', 'Madrid']
    }

    response.render('index', data); //Shorthand notation
});

//1. Change home route in order to
//Send a view called home-page.html
app.get('/home', (request, response) => {
    //The code inside this callback function
    //Will get executed, once the user
    //Types /home on the browser 
    console.log(__dirname);
    console.log('/views/home-page.html');
    console.log(__dirname + '/views/home-page.html');
    response.sendFile(__dirname + '/views/home-page.html');
});

//1. Create another route with the path /about
//That will send "This is the about page"
//Once the user types localhost:3000/about
app.get('/about', (request, response) => {
    response.send('<h1>This is the about page.<h1>')
});

app.get('/cat', (request, response) => {
    //__dirname refers to the folder where our app lives
   response.sendFile(__dirname + '/views/cat-page.html');
});

app.listen(3000, () => {
    console.log('My app is listening on port 3000');
});
