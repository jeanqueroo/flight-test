const express = require('express');
const router = express.Router();

const Comment = require('../adapters/controllers/commentController')

router.route('/comments').get(Comment.fetchFindAll);

router.route('/comments').post(Comment.addNewComment);

router.route('/comments/:flightId').get(Comment.fetchFindByFlightId);

module.exports = router;