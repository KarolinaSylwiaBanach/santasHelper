const express = require('express');
const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        //redirect to another page
        res.redirect('/child');
    });

module.exports = {
    homeRouter,
}