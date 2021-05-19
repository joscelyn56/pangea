/*!
 * Message Service
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const Message = require('../config/models').Message
const MessageService = require('./service')(Message)

module.exports.Message = MessageService
