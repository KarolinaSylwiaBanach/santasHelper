const express = require('express');
const {engine} = require('express-handlebars');
const methodOverride = require('method-override');
const {handleError} = require("./utils/errors");
const {homeRouter} = require("./routers/home");
const {childRouter} = require("./routers/child");
const {giftRouter} = require("./routers/gift");
require('./utils/db');

const app = express();

app.use(handleError);
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json()); // Content-type: application/json
app.engine('.hbs', engine({
    extname: '.hbs',
   // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/',homeRouter);
app.use('/child', childRouter );
app.use('/gift', giftRouter );


app.listen(3000, 'localhost', () =>{
    console.log('Listening on http://localhost:3000');
});
