import { beforeAll, describe, it, expect } from '@jest/globals'
import request from 'supertest'
import app from '../app.js'

describe('Ping routes', () => {
  let response

  beforeAll(async () => {
    response = await request(app).get('/api/ping').send()
  })

  it('GET /api/ping should return status code 200', () => {
    expect(response.status).toBe(200)
  })

  it('GET /api/ping should return JSON', () => {
    expect(response.type).toMatch(/json/)
  })

  it('GET /api/ping should return the correct JSON response', () => {
    expect(response.body).toEqual({ msg: 'pong' })
  })

  it('GET /api/ping should have a "msg" property in the JSON response', () => {
    expect(response.body).toHaveProperty('msg')
  })

  it('GET /api/ping should have the correct "msg" value in the JSON response', () => {
    expect(response.body.msg).toBe('pong')
  })
})
