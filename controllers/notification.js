var util = require('util');
var db = require("../core/db");
var nodemailer = require("nodemailer");
var url = require('url');



exports.setNotification = function (req, resp, reqbody) {
    try {
        if (!reqbody) throw new Error("Input not valid");
        var data = JSON.parse(reqbody);
        if (data) {
            var sql = "insert into KAPI_notification (titre, description, groupe_cible, zone_cible, source_de_donnees,image,id_client) VALUES('" + data.titre + "', '" + data.description + "', '" + data.groupe_cible + "', '" + data.zone_cible + "','" + data.source_de_donnees + "','" + data.image + "'," + data.id_client+")";
            db.executeSql(sql, function (data, err) {
                if (err) {
                    resp.writeHead(500, "Internal Error Occoured", {
                        "Content-type": "text/html"
                    });
                    resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
                    resp.end();
                } else {
                    resp.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    resp.write(JSON.stringify(data));
                }
                resp.end();
            });
        }
        else {
            throw new Error("Input not valid");
        }
    } catch (ex) {

    }
}
exports.getNotifications = function (req, resp) {
    db.executeSql("SELECT * from KAPI_notification", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occoured", {
                "Content-type": "text/html"
            });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
            resp.end();
        } else {
            resp.writeHead(200, {
                "Content-Type": "application/json"
            });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}
exports.getNombreNotifications = function (req, resp) {
    db.executeSql("SELECT count(*) from KAPI_notification", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occoured", {
                "Content-type": "text/html"
            });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
            resp.end();
        } else {
            resp.writeHead(200, {
                "Content-Type": "application/json"
            });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}
exports.getNotificationsById = function (req, resp,id_client) {
    db.executeSql("SELECT * from KAPI_notification where id_client="+id_client, function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occoured", {
                "Content-type": "text/html"
            });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
            resp.end();
        } else {
            resp.writeHead(200, {
                "Content-Type": "application/json"
            });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}

exports.getNotificationsByClient = function (req, resp) {
    const urlObject = url.parse(req.url, true);

    db.executeSql("SELECT * from KAPI_notification where id_client=" + urlObject.query.CardCode + " and zone_cible like '" + urlObject.query.zone + "' and groupe_cible ='" + urlObject.query.groupe + "'", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occoured", {
                "Content-type": "text/html"
            });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
            resp.end();
        } else {
            resp.writeHead(200, {
                "Content-Type": "application/json"
            });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}
exports.getNotificationsByZoneAndGroupe = function (req, resp,user) {
    db.executeSql("select titre,groupe_cible,zone_cible,source_de_donnees,image from KAPI_notification where KN.zone_cible = "+user.ville+"  and KN.groupe_cible = VCC.u_categorie="+user.categorie, function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error Occoured", {
                "Content-type": "text/html"
            });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
            resp.end();
        } else {
            resp.writeHead(200, {
                "Content-Type": "application/json"
            });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
}


