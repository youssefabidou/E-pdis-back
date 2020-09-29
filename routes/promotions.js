var express = require('express');
var router = express.Router();
var db = require("../core/db");


router.get('/:zone/:groupe', (req, res, next) => {
    var zone = req.params.zone;
    var groupe = req.params.groupe;
    var datetime = new Date();
    db.executeSql("SELECT * from KAPI_promo where zone like "+zone+" and groupe like "+groupe+" and date_de_fin >= " + datetime +" order by date_de_debut DESC", (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.post('/add', (req, res) => {
    var data = {
        text: req.body.text,
        image: req.body.image,
        date_de_debut: req.body.date_de_debut,
        date_de_fin: req.body.date_de_fin,
        zone: req.body.zone,
        groupe: req.body.groupe
    }

    db.executeSql("insert into KAPI_promo (text ,image, date_de_debut, date_de_fin, zone, groupe) VALUES ('" + data.text + "','" + data.image + "'," + data.date_de_debut + "," + data.date_de_fin + ",'" + data.zone + "','" + data.groupe + "')", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

module.exports = router;


