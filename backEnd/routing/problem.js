const express = require('express');
const router = express.Router();

const {list_all, list_all_like, post, updateLike} = require('../controller/problem');

router.route("/list/all").get(list_all);
router.route("/list/all_like").get(list_all_like);
router.route("/post").post(post);
router.route("/updateLike").put(updateLike);

module.exports = router;