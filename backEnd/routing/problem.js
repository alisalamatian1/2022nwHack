const express = require('express');
const router = express.Router();

const {list_all, post} = require('../controller/problem');

router.route("/list/all").get(list_all);
router.route("/post").post(post);

module.exports = router;