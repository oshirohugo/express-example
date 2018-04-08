const { expect } = require('chai');
const request = require('supertest');

const server = require('../index');

describe('weather', () => {
  it('GET /weather/:zipcode should return 200 OK with valid data', async () => {
    const response = await request(server)
      .get('/weather/10001')
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).to.be.an('object');
  });

  it('GET /weather/:city-name should return 200 OK with valid data', async () => {
    const response = await request(server)
      .get('/weather/boston')
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).to.be.an('object');
  });
});
