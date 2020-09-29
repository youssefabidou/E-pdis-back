const express = require('express');
var router = express.Router();
var db = require("../core/db");

router.post('/add', (req, res) => {
    const data = {
        Code: req.body.Code,
        Disponibilite: req.body.Disponibilite,
        Num_Catalog_Frs: req.body.Num_Catalog_Frs,
        PrixTTC: req.body.PrixTTC,
        libelle: req.body.libelle
    }

    db.executeSql("insert into KP_paniers (Code,  Disponibilite, Num_Catalog_Frs, PrixTTC, libelle ) VALUES ('"+ data.Code + "','" + data.Disponibilite + "','" + data.Num_Catalog_Frs + "'," + data.PrixTTC + ",'" + data.libelle + "')", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

module.exports = router;
