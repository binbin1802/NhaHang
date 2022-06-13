var express = require('express');
var con = require('./DBConnection');
var router = express.Router();


/*var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant",
    port: 3306,
  });*/

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
  router.post('/restaurant/create', function(req, res,next){
    var ID = req.body.ID;
    let NAME = req.body.NAME;
    var description = req.body.description;
    var content = req.body.content;
    var address = req.body.address;
    var image = req.body.image;
    const d = new Date();
    let date= d.getDate();
    var created_at = new Date().toISOString().slice(0, 19).replace("T", " ") // req.body.create_at;
    var updated_at = new Date().toISOString().slice(0, 19).replace("T", " ") // req.body.update_at;
    var sql = `insert into restaurants (id, name, description, content, address, image, rate, rate_count, created_at, updated_at) VALUES (${ID},"${NAME}","${description}","${content}","${address}","${image}",${1},${1},"${created_at}","${updated_at}");`;
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

  router.post('/restaurant/create', function(req, res,next){
    var id = req.body.id;
    let name = req.body.name;
    var description = req.body.description;
    var content = req.body.content;
    var address = req.body.address;
    var image = req.body.image;
    const d = new Date();
    let date= d.getDate();
    var created_at = new Date().toISOString().slice(0, 19).replace("T", " ") // req.body.create_at;
    var updated_at = new Date().toISOString().slice(0, 19).replace("T", " ") // req.body.update_at;
    var sql = `insert into restaurants (id, name, description, content, address, image, rate, rate_count, created_at, updated_at) VALUES (${id},"${name}","${description}","${content}","${address}","${image}",${1},${1},"${created_at}","${updated_at}");`;
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