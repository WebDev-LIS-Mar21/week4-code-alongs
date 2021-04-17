const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/books', async (req, res) => {
   res.render('book-list');
});

app.get('/create', async (req, res) => {
    res.render('create-book');
});

app.post('/create', async (req, res) => {
    //Receive the name and book description from my form
    //To get information from a form with a post request we do req.body.[nameOfTheInput]
    // let bookName = req.body.bookName;
    // let bookDescription = req.body.bookDescription;

    let { bookName, bookDescription } = req.body;
    console.log(`Book name coming from the form ${bookName}`);
    console.log(`Book description coming from the form ${bookDescription}`);
    //Book.create({ bookName, bookDescription})
    res.render('book-list');
});

app.get('/books/:bookId', async (req, res) => {
  //  let bananas = req.params.bookId; //Get the id that is on the url
  //  console.log(`I got the book Id that comes from the url ${bananas}`);
   // getBooksById(req.params.bookId);
    //findById(req.params.bookId);
    //use a bookid to make an api search - getBooksById()
    //use a bookid to make a database search - findById()
    console.log(`I got the book Id that comes from the url ${req.params.bookId}`);
    // let book = await getBooksById(req.params.bookId);
    // res.render('book-detail', book);
});

app.get('/search', async (req, res) => {
    res.render('book-search');
});

app.get('/search-results', async (req, res) => {
    //Where I want to get what the user wrote on the form
    //And make some queries to either a database on an api

    // let bookName = req.query.bookName;
    // let bookYear = req.query.bookYear;
    let { bookName, bookYear } = req.query; //This comes from our
    //search form inputs
    
    //let books = await Book.find({ bookName: bookName, bookYear: bookYear})
    console.log(`I got the book query params that 
    come from the url ${bookName} ${bookYear}`);

    res.render('results');
});

app.listen(3000, () => {
    console.log('App listening on port 3000.');
});