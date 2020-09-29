var util = require('util');
var db = require("../core/db");
var nodemailer = require("nodemailer");


exports.getList = function(req, resp) {
    db.executeSql(" SELECT * from v_catalog order by Groupe ", function(data, err) {
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
};
exports.getListCategory = function(req, resp) {
    db.executeSql("select distinct Groupe from v_catalog ", function(data, err) {
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
};
exports.get = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'ADA' ", function(data , err) {
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
exports.getALPLAST = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'ALPLAST' ", function(data , err) {
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

exports.getAROSA = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'AROSA' ", function(data , err) {
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


exports.getBlacky = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'BLACKY' ", function(data , err) {
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



exports.getCIRIO = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'CIRIO' ", function(data , err) {
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

exports.getCONEJO = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'CONEJO' ", function(data , err) {
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



exports.getCORAL = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'CORAL' ", function(data , err) {
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



exports.getDIVERS = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'DIVERS' ", function(data , err) {
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


exports.getFOXY = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'FOXY' ", function(data , err) {
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



exports.getGULLON = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'GULLON' ", function(data , err) {
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

exports.getINDOMIE = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'INDOMIE' ", function(data , err) {
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


exports.getJACKY = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'JACKY' ", function(data , err) {
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


exports.getJUVER = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'JUVER' ", function(data , err) {
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


exports.getKRAKER = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'KRAKER' ", function(data , err) {
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


exports.getLASALUD = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'LA SALUD' ", function(data , err) {
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


exports.getLOZANO = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'LOZANO' ", function(data , err) {
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


exports.getMASCOTAS = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'MASCOTAS' ", function(data , err) {
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


exports.getNICEPAPER = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'NICE PAPER' ", function(data , err) {
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


exports.getPAMEX = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'PAMEX' ", function(data , err) {
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


exports.getQUERAY = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'QUERAY' ", function(data , err) {
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



exports.getROMAR = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'ROMAR' ", function(data , err) {
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

exports.getTWINS = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'TWINS' ", function(data , err) {
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
exports.getVIDAL = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'VIDAL' ", function(data , err) {
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

exports.getvileda = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'VILEDA' ", function(data , err) {
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
exports.getZAYNA = function(req, resp){
    db.executeSql("select * from v_catalog where Groupe= 'ZAYNA' ", function(data , err) {
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

// this is the backend for  client situation
exports.getClientSituation = function(req , resp, CardCode){
    db.executeSql("select *  from  V_Situation_Client where  TRY_CONVERT(int, cardcode)= "+CardCode, function(data , err) {
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


exports.getCommandes = function(req , resp, CardCode){
    db.executeSql("select * from  V_Situation_Commandes  where  TRY_CONVERT(int, cardcode)= "+CardCode, function(data , err) {
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


exports.getLivraisons = function(req , resp, CardCode){
    db.executeSql("select * from  V_Situation_Livraisons  where  TRY_CONVERT(int, cardcode)= "+CardCode, function(data , err) {
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


exports.getLivraisonsdetails = function(req , resp){
    db.executeSql("select * from  V_Situation_Livraisons_detail   ", function(data , err) {
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


exports.getcommandedetails = function(req , resp){
    db.executeSql("select * from V_Situation_Commandes_details   ", function(data , err) {
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

exports.getuser = function(req , resp, ID){
    db.executeSql("select * from KP_Authentification  where  TRY_CONVERT(int, TEL)= "+ID, function(data , err) {
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
exports.send = function (req , resp , reqbody) {
    var result = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 8; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    const html = `Hello there,
            <br/>
            Thank you for registering!
            <br/><br/>
            Please verify your email address by entering the following code:
            <br/>
            Verification Code: <b>${result}</b>
            <br/><br/>
           this is an automatic message, please don't answer
            <br/>
            Have a pleasant day!`;
    const  email  = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "ilyasbelkacem08@gmail.com",
            pass: "Ilyasse1999@"
        }
    });

    transporter.sendMail({ from: 'ilyasbelkacem08@gmail.com', subject: 'Email Verification', to: 'youssefab999@gmail.com', html }
        , function (err, info) {
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
                resp.write(JSON.stringify(info));
            }
            resp.end();
        });
}
// this is the backend of the client situation backend

exports.add = function (req, resp, reqbody) {
    try{
        if (!reqbody) throw new Error("Input not valid");
        var data = JSON.parse(reqbody);
        if(data){
            var sql = "insert into KP_panier (Code,  Disponibilite, Num_Catalog_Frs, PrixTTC, libelle , quantite) VALUES (" + data.Code + ",'" + data.Disponibilite + "'," + data.Num_Catalog_Frs + "," + data.PrixTTC + ",'" + data.libelle + "'," + data.quantite +")";
            //var sql = "insert into KP_panier ( Code,  Disponibilite, Num_Catalog_Frs, PrixTTC,libelle,quantite,confirmation_signature) VALUES (1,'dispo',1,20, 'abc','50', 0)";
            //sql += util.format("('%d',%d','%s', '%d' ,'%d' ,'%s' ,'%s','%d')" , 
            //console.log(sql)
            db.executeSql(sql, function(data, err) {
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
        else{
            throw new Error("Input not valid");
        }
    }catch (ex){

    }
}
