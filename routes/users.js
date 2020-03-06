var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const adminController = require('../controllers/adminController');

/* GET users listing. */
router.post('/profile', profileController.updateprofile);
router.get('/profile/:id', profileController.getprofile);
router.post('/admin', adminController.career);


module.exports = router;
