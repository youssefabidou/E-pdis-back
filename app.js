const express = require('express');
const app = express();
const http = require('http');
var db = require("./core/db");

//declarations des routes
const productRoutes = require('./routes/product');
const signaturesRoutes = require('./routes/signatures');
const commandesRoutes = require('./routes/commandes');
const panierRoutes = require('./routes/panier');
const promotionsRoutes = require('./routes/promotions');
const livraisonsRoutes = require('./routes/livraisons');

var logger = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//lancement du serveur
const hostname = '127.0.0.1';
const port = process.env.PORT || 9000;
const server = http.createServer(app);
console.log('server runing');
server.listen(port, hostname);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//les routes
app.use('/products', productRoutes);
app.use('/user-account/commande', signaturesRoutes);
app.use('/user-account', commandesRoutes);
app.use('/panier', panierRoutes);
app.use('/promotions', promotionsRoutes);
app.use('/user-account/livraisons', livraisonsRoutes);

module.exports = app;


/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


require("./core/server");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
*/