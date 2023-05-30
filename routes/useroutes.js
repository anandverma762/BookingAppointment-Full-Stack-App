const usercontroller = require('../controllers/userinfo')

const express = require('express');

const rout = express.Router();

rout.post('/usersend',usercontroller.postdata);

rout.get('/userdata',usercontroller.getuser);

rout.delete('/deleteuser/:id',usercontroller.deleteuser);

module.exports = rout;