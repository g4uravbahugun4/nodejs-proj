const path = require('path');

const express = require('express');

const userDataController = require('../controller/userDataController')



const router = express.Router();

router.get('/',userDataController.getUserlist);

module.exports = router;