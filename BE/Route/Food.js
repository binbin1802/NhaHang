var express = require('express');
var con = require('./DBConnection');
var router = express.Router();

/*var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant",
  port: 3306,
}); */

  router.get('/foods', function(req, res, next){
    con.connect(function(err){
      if (err) throw err;
      var sql = `Select * From foods`;
      con.query(sql,function(err,result){
        if(err) throw err;
        res.json(result);
      });
    });
  });

  router.get('/book_restaurant', function(req, res, next){
    con.connect(function(err){
      if (err) throw err;
      var sql = `Select * From book_restaurant`;
      con.query(sql,function(err,result){
        if(err) throw err;
        res.json(result);
      });
    });
  });

  router.get('/rate_restaurant', function(req, res, next){
    con.connect(function(err){
      if (err) throw err;
      var sql = `Select * From rate_restaurant`;
      con.query(sql,function(err,result){
        if(err) throw err;
        res.json(result);
      });
    });
  });
  
  router.get('/restaurants', function(req, res, next){
    con.connect(function(err){
      if (err) throw err;
      var sql = `Select * From restaurants`;
      con.query(sql,function(err,result){
        if(err) throw err;
        res.json(result);
      });
    });
  });


  router.post('/food/create_food', function(req, res,next){
    var id = req.body.id;
    var name = req.body.name;
    var restaurant_id = req.body.restaurant_id;
    var price = req.body.price;
    var image = req.body.image;
    var create_at = req.body.create_at;
    var update_at = req.body.update_at;
    var sql = `INSERT INTO foods (id, name, restaurant_id, price, image) VALUES ("${id}","${name}","${restaurant_id}","${price}","${image}")`;
    con.query(sql,function(err,result){
      if(err) {
        res.status(500).send(err.message);
        return;
      } // throw err;

      if (result.affectedRows == 1) {
        res.send({
          status: "OK",
          data: req.body
        });
      }
    });
  });
  
  module.exports = router;

 
  