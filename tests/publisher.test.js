const db = require('./../src/config/models/index')

const request = require('supertest')
const app = require('../src/server/app')

let topic = ''

afterAll(() => {
    db.sequelize.close()
})

describe('Create new topic', () => {
    test('It should add a new topic successfully', async() => {
        await request(app)
            .post('/topic')
            .send({
                name: 'test',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                console.log(res.body)
                topic = res.body.payload.name
            })
    })
})

describe('Subscribe to topic', () => {
    test('It should return subscription was successful', async() => {
        await request(app)
            .post('/subscribe/test')
            .send({
                url: 'http://localhost:5001',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                console.log(res.body)
            })
    })
})

describe('Publish message to a topic', () => {
    test('It should add a new message publish to topic successfully', async() => {
        await request(app)
            .post('/publish/test')
            .send({
                message: 'This is the first test',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                console.log(res.body)
            })
    })
})
