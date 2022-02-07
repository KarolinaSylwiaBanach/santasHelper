const express = require('express');

const {GiftRecord} = require("../records/gift.record");
const {pool} = require("../utils/db");
const giftRouter = express.Router();

giftRouter
    .get('/', async(req, res) => {
        const giftsList = await GiftRecord.listAll();
        console.log(giftsList);
        res.render('gifts/list',{
            giftsList,
        });
    });

module.exports = {
    giftRouter,
}