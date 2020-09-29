const express = require('express');
var router = express.Router();
var db = require("../core/db");

/*router.post('/user-account/commande/signature/add/api', (req, res, next) => {
    console.log('post function');
    req.on("end", function () {
        signature.setSignature(req, resp,);
    })
});*/

router.post('/signature', (req, res, next) => {
    const data = { 
        DocEntry: req.body.DocEntry,
        image_signature: req.body.image_signature
    }
    db.executeSql("insert into KAPI_signature (confirmation_signature,DocEntry,image_signature) VALUES (  1 , " + data.DocEntry + ",'" + data.image_signature + "')", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

router.get('/signature/:DocEntry', (req, res, next) => {
    const DocEntry = req.params.DocEntry;
    db.executeSql('select confirmation_signature from  V_KAPI_signatures  where  DocEntry = ' + DocEntry, (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});

module.exports = router;
