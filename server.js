const http = require('http');
const app = require("./app");
const port = process.env.PORT || 9000;
const server = http.createServer(app);
console.log('server runing');
server.listen(port);
/*var product = require("../controllers/products");
var signature = require("../controllers/signature");
var notification = require("../controllers/notification");
var settings = require("../setting");
var url = require('url');
var CardCode;
var zone;
var groupe;
*/

/*http.createServer(function (req, resp) {
    const urlObject = url.parse(req.url, true);
*//*    console.log(urlObject.query.CardCode);
*//*  CardCode = urlObject.query.CardCode;
    zone = urlObject.query.zone;
    groupe = urlObject.query.groupe;
    switch (req.method) {
        case "GET" :
            if (req.url === "/") {
                resp.end();
            }
            *//* else if (req.url === "/notifications/api/filtre") {
                 resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                 resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                 resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                 resp.setHeader('Access-Control-Allow-Credentials', true);
                 notification.getNotificationsByIdClient(req, resp, 2342184);
             }*/
/*            else if (req.url === "/notifications/:cardcode/:tanger/:ROMAR") {
*//*            else if (req.url === "/notifications/api/?CardCode="+CardCode+"&zone="+zone+"&groupe="+groupe) {       
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                notification.getNotificationsByClient(req, resp);
            }
            else if (req.url === "/notifications/api/count") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                notification.getNombreNotifications(req, resp);
            }

            else if (req.url === "/notifications/api") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                notification.getNotifications(req, resp);
            }
            else if (req.url === "/card/api/id") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                signature.getPanierId(req, resp,id);
            }
            else if (req.url === "/user-account/commande/signature/api") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                signature.getSignature(req, resp);
            }
            else if (req.url === "/products/api") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                 product.getList(req,resp);
            }
            else if (req.url === "/products/api/Category"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getListCategory(req,resp);
        }
            else if (req.url === "/products/api/ADA"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.get(req,resp);
            }
            else if (req.url === "/products/api/ALPLAST"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getALPLAST(req,resp);
            }
            else if (req.url === "/products/api/AROSA"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getAROSA(req,resp);
            }
            else if (req.url === "/products/api/BLACKY")
            {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getBlacky(req,resp);
            }
            else if (req.url === "/products/api/CIRIO"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getCIRIO(req,resp);
            }
            else if (req.url === "/products/api/CONEJO"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getCONEJO(req,resp);
            }
            else if (req.url === "/products/api/CORAL"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getCORAL(req,resp);
            }
            else if (req.url === "/products/api/DIVERS"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getDIVERS(req,resp);
            }
            else if (req.url === "/products/api/FOXY"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getFOXY(req,resp);
            }
            else if (req.url === "/products/api/GULLON"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getGULLON(req,resp);
            }
            else if (req.url === "/products/api/INDOMIE"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getINDOMIE(req,resp);
            }
            else if (req.url === "/products/api/JACKY"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getJACKY(req,resp);
            }
            else if (req.url === "/products/api/JUVER"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getJUVER(req,resp);
            }
            else if (req.url === "/products/api/KRAKER"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getKRAKER(req,resp);
            }
            else if (req.url === "/products/api/LASALUD"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getLASALUD(req,resp);
        }
        else if (req.url === "/products/api/LOZANO"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getLOZANO(req,resp);
        }
        else if (req.url === "/products/api/MASCOTAS"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getMASCOTAS(req,resp);
        }
        else if (req.url === "/products/api/NICEPAPER"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getNICEPAPER(req,resp);
        }
        else if (req.url === "/products/api/ALPLAST/PAMEX"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getPAMEX(req,resp);
        }
        else if (req.url === "/products/api/QUERAY"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getQUERAY(req,resp);
        }
        else if (req.url === "/products/api/ROMAR"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getROMAR(req,resp);
        }
        else if (req.url === "/products/api/TWINS"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getTWINS(req,resp);
        }
        else if (req.url === "/products/api/VIDAL"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getVIDAL(req,resp);
        }
        else if (req.url === "/products/api/VILEDA"){
            resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            resp.setHeader('Access-Control-Allow-Credentials', true);
            product.getvileda(req,resp);
        }
            else if (req.url === "/products/api/ZAYNA"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getZAYNA(req,resp);
            }
            // backend of client situation
           *//* else if (req.url === "/products/ClientSituation"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getClientSituation(req,resp);
            }*//*
            else if (req.url === "/products/api/Livraison/details"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getLivraisonsdetails(req,resp);
            }
            else if (req.url === "/products/api/Commandes/details"){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                product.getcommandedetails(req,resp);
            }
*//*            var DocEntry = "[0-9]+";
            var patt = new RegExp("/user-account/commande/signature/" + DocEntry);
            if (patt.test((req.url))) {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                patt = new RegExp(DocEntry);
                var D_E = patt.exec(req.url);
                signature.getSignature(req, resp, D_E);
            }
*//*
                var ProductGroupe = "[0-9]+";
                var patt = new RegExp("/products/api/ClientSituation/"+ProductGroupe);
                if(patt.test((req.url))){
                    resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                    resp.setHeader('Access-Control-Allow-Credentials', true);
                    patt = new RegExp(ProductGroupe);
                    var prGr = patt.exec(req.url);
                    product.getClientSituation(req,resp,prGr);
                }

            var ProductGroupe = "[0-9]+";
            var patt = new RegExp("/products/api/Commandes/"+ProductGroupe);
            if(patt.test((req.url))){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                patt = new RegExp(ProductGroupe);
                var prGr = patt.exec(req.url);
                product.getCommandes(req,resp,prGr);
            }

            var ProductGroupe = "[0-9]+";

            var patt = new RegExp("/products/api/Livraisons/"+ProductGroupe);
            if(patt.test((req.url))){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                patt = new RegExp(ProductGroupe);
                var prGr = patt.exec(req.url);
                product.getLivraisons(req,resp,prGr);
            }

            var ProductGroupe = "[0-9]+";
            var patt = new RegExp("/products/api/user/"+ProductGroupe);
            if(patt.test((req.url))){
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                patt = new RegExp(ProductGroupe);
                var prGr = patt.exec(req.url);
                product.getuser(req,resp,prGr);
            }
*//*    var CardCode = "[0-9]+";
    var zone="";
    var ville;
    var patt = new RegExp("/notifications/api/?CardCode=3939&zone=tanger&groupe=ROMAR");
    if (patt.test((req.url))) {
        resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
        resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
        resp.setHeader('Access-Control-Allow-Credentials', true);

*//*        patt = new RegExp(CardCode);
        patt = new RegExp(zone);
        patt = new RegExp(ville);
        var Crd = patt.exec(req.url);
*//*        console.log(Crd);
        console.log(zn);
        notification.getNotificationsByClient(req, resp);
    }
*//*            break;
        case "POST":
            if (req.url === "/") {
                resp.end();
            }
            else if (req.url === "/user-account/commande/signature/add/api") {
                console.log('daz');
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                var reqBody = '';
                req.on("data", function (data) {
                    reqBody += data;
                });
                req.on("end", function () {
                    signature.setSignature(req, resp);
                });
            }

            else if (req.url === "/notifications/api/envoie") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                var reqBody = '';
                req.on("data", function (data) {
                    reqBody += data;
                  
                });
                req.on("end", function () {
                    notification.setNotification(req, resp, reqBody);
                });
            }
*//*            else if (req.url === "/panier/api/add") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                var reqBody = ' ';
                req.on("data", function (data) {
                    reqBody += data;
                });
                req.on("end", function () {
                    signature.setPanier(req, resp);
                });
            }
*//*            else if (req.url === "/products/api/add") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                var reqBody = ' ';
                req.on("data", function (data) {
                    reqBody += data;
                    if (reqBody.length > 1e7) {

                    }
                });
                req.on("end", function () {
                    product.add(req, resp, reqBody);
                });
            }

            else if (req.url === "/sendmail") {
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                console.log("request came");
                var reqBody = ' ';
                req.on("data", function (data) {
                    reqBody+= data;
                    if(reqBody.length > 1e7){

                    }
                });
                req.on("end" , function () {
                    console.log(reqBody);
                    product.send(req, resp, reqBody);
                });
            }

            break;
        case "PUT":
            if (req.url === "/") {
                resp.end();
            }
            else if (req.url === "/user-account/commande/signature/update/api"+id_signature) {
                console.log('dkhlat');
                resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
                resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
                resp.setHeader('Access-Control-Allow-Credentials', true);
                var reqBody = '';
                req.on("data", function (data) {
                    reqBody += data;

                });
                req.on("end", function () {
                    signature.updateSignature(req, resp, reqBody,image);
                });
            }
            break;

    }

}).listen(settings.webPort, function () {
    console.log("start listening at " + settings.webPort);
});*/