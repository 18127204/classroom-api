const express = require('express');
const router = express.Router();

const classController=require('./classesController');

/* GET users listing. */
router.get('/', classController.list);

router.get('/:id',classController.detail);
router.post('/',classController.create);
module.exports = router;
