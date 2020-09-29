const express = require('express');
var router = express.Router();
var db = require("../core/db");

router.post('/notifications', (req, res, next) => {
    const data = {
        titre: req.body.titre,
        description: req.body.description,
        zone_cible: req.body.zone_cible,
        groupe_cible: req.body.groupe_cible,
        source_de_donnees: req.body.groupe_cible,
        image: req.body.image,
        id_client: req.body.id_client
    }
    db.executeSql("insert into KAPI_notification (titre, description, groupe_cible, zone_cible, source_de_donnees,image,id_client) VALUES('" + data.titre + "', '" + data.description + "', '" + data.groupe_cible + "', '" + data.zone_cible + "','" + data.source_de_donnees + "','" + data.image + "'," + data.id_client +")", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

router.get('/notifications/:zone_cible/:groupe_cible', (req, res, next) => {
    const zone_cible = req.params.zone_cible;
    const groupe_cible = req.params.groupe_cible;
    db.executeSql('select * from  KAPI_notification where zone_cible like ' + zone_cible + ' and groupe_cible like ' + groupe_cible, (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

module.exports = router;
