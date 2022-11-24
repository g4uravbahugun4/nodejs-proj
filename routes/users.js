const path = require('path');
const express = require('express');
const router = express.Router();
const userDataController=require('../controller/userDataController')


router.get('/add-user',userDataController.addUserpage)

router.post('/add-user',userDataController.postAddUser)

router.get('/users/:id',userDataController.getUserDetail)

exports.routes=router
