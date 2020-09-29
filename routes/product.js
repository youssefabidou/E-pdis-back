const express = require('express');
var router = express.Router();
var db = require("../core/db");

router.get('/',(req, res, next) => {
    db.executeSql('SELECT * FROM V_catalog', (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

router.get('/category', (req, res, next) => {
    db.executeSql("SELECT distinct Groupe from V_catalog", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});
/*router.post('/', (req, res, next) => {
    db.executeSql('SELECT * FROM V_catalog', (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});
*/
router.get('/:productGroup', (req, res, next) => {
    const productGroupe = req.params.productGroup;
    db.executeSql("SELECT * FROM V_catalog where Groupe like'" + productGroupe +"'", (error, result) => {
        if (error) throw error;
        res.send(result);
    });

});



module.exports = router;
