/*!
 * Subscriber Service
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const Subscriber = require('../config/models').Subscriber
const SubscriberService = require('./service')(Subscriber)

module.exports.Subscriber = SubscriberService
