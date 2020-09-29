const express = require('express');
var router = express.Router();
var db = require("../core/db");

router.get('/lv/:CardCode', (req, res, next) => {
    const CardCode = req.params.CardCode;
    db.executeSql('select * from  V_Situation_Livraisons  where  cardcode like ' + CardCode, (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});


router.get('/details', (req, res, next) => {
    db.executeSql('select * from V_Situation_Livraisons_detail', (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

module.exports = router;
