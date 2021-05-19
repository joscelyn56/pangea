/*!
 * Publisher Repository
 */
'use strict'

/**
 * Module dependencies.
 * @private
 */
const axios = require('axios')
const {Topic} = require('../services/topic.service')
const {Message} = require('../services/message.service')
const {Subscriber} = require('../services/subscriber.service')

function PublisherRepository() {
}

PublisherRepository.prototype.addTopic = async (req, res) => {
	let name = req.body.name
	
	try {
		let topic = await Topic.add({
			name,
		})
		if (topic) {
			return res.status(200).json({
				response: `New topic ${name} added successfully.`,
				payload: topic
			});
		}
		return res.status(400).json({
			response: 'Error adding new topic.'
		})
	} catch (err) {
		console.error(err)
		throw err
	}
}

PublisherRepository.prototype.subscribe = async (req, res) => {
	let name = req.params.topic
	let url = req.body.url
	
	try {
		let topic = await Topic.get({
			name,
		})
		if (topic) {
			let isSubscriber = await Subscriber.get({
				topic: topic.id,
				url,
			})
			if (isSubscriber) {
				return res.status(400).json({
					response: `You have already subscriber to this topic`
				});
			}
			
			let subscriber = await Subscriber.add({
				topic: topic.id,
				url,
			})
			if (subscriber) {
				return res.status(200).json({
					response: `You have successfully subscribed to topic ${name}`,
					payload: {
						url,
						topic: topic.name,
					}
				});
			}
			return res.status(400).json({
				response: `An error occurred while subscribing to topic ${name}`
			});
		}
		return res.status(404).json({
			response: 'Topic not found.'
		})
	} catch (err) {
		console.error(err)
		throw err
	}
}

PublisherRepository.prototype.publishMessage = async (req, res) => {
	let topic = req.params.topic
	let message = req.body
	
	try {
		let topicExist = await Topic.get({
			name: topic,
		})
		if (topicExist) {
			await Message.add({
				topic: topicExist.id,
				message: JSON.stringify(message),
			})
			
			let subscribers = await Subscriber.getAll({
				topic: topicExist.id,
			})
			if (subscribers.length > 0) {
				subscribers.map(subscriber => {
					return axios.post(subscriber.url, {
						topic: topic,
						data: message
					})
				})
				await Promise.all(subscribers)
			}
			return res.status(200).json({
				response: `Message successfully published to topic ${topic}`
			})
		}
		return res.status(404).json({
			response: 'Topic not found.'
		})
	} catch (err) {
		console.error(err)
		throw err
	}
}

module.exports = new PublisherRepository()
