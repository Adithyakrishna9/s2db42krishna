var express = require('express');
const heroine_controller = require('../controllers/heroine');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('heroines', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', heroine_controller.heroine_view_all_Page );

module.exports = router;
