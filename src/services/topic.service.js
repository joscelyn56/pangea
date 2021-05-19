/*!
 * Topic Service
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const Topic = require('../config/models').Topic
const TopicService = require('./service')(Topic)

module.exports.Topic = TopicService
