const express = require('express');
const router = express.Router();

const {list, post} = require('../controller/problem');

router.route("/list").get(list);
router.route("/post").post(post);

module.exports = router;