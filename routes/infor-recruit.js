const express = require("express");
const router = express.Router();
const path = require("path");



router.get('/', function(req,res){ // 2
	res.render('infor-recruit', {user: req.session.name});
  });



module.exports = router;