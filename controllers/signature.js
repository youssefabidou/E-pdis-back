var util = require('util');
var db = require("../core/db");
var nodemailer = require("nodemailer");

exports.getSignature = function (req, resp) {
    db.executeSql("SELECT * from KAPI_signature ", function (data, err) {
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
                    console.log("ta hadi dazt");
                }
                resp.end();
            });
}
exports.setSignature = function (req, resp) {
    try {
        console.log('fait');
        if (!req.reqbody) throw new Error("Input not valid");
        var data = JSON.parse(req.reqbody);
        if (data) {
            var sql = "insert into KAPI_signature (confirmation_signature,DocEntry,image_signature) VALUES (  1 , " + data.DocEntry+",'"+data.image_signature+"')";
            db.executeSql(sql, function (data, err) {
                if (err) {
                    resp.writeHead(500, "Internal Error Occoured", {
                        "Content-type": "text/html"
                    });
                    resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
                    resp.end();
                } else {
                    console.log('dakchi');
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
exports.updateSignature = function (req, resp, reqbody, image_signature) {
    try {
        if (!reqbody) throw new Error("Input not valid");
        var data = JSON.parse(reqbody);
        if (data) {
            var sql = "UPDATE KAPI_signature SET image_signature = ' " + image_signature + "' where DocEntry = " + data.DocEntry;
            db.executeSql(sql, function (data, err) {
                if (err) {
                    resp.writeHead(500, "Internal Error Occoured", {
                        "Content-type": "text/html"
                    });
                    resp.write("<html><head><title>500</title></head><body>500: Internal Error, Details:" + err + "</body></html>");
                    resp.end();
                } else {
                    console.log('dakchi');
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




