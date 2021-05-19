const express = require('express')
const router = express.Router()

const PublisherRepo = require('./../repository/publisher.repository')

router.post('/topic', PublisherRepo.addTopic)
router.post('/subscribe/:topic', PublisherRepo.subscribe)
router.post('/publish/:topic', PublisherRepo.publishMessage)

module.exports = router
