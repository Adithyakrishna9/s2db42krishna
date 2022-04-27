var express = require('express');
const heroine_controller = require('../controllers/heroine');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('heroines', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', heroine_controller.heroine_view_all_Page );

/* GET detail heroine page */ 
router.get('/detail',secured, heroine_controller.heroine_view_one_Page); 
/* GET create heroine page */
router.get('/create',secured, heroine_controller.heroine_create_Page);
/* GET create update page */
// router.get('/update', secured, heroine_controller.heroine_update_Page);
router.get('/update',secured,heroine_controller.heroine_update_Page); 
 
// A little function to check if we have an authorized user and continue on 

/* GET delete heroine page */
router.get('/delete', heroine_controller.heroine_delete_Page);
module.exports = router;
