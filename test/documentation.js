const { expect } = require('chai');
const request = require('supertest');

const server = require('../index');

describe('documentation', () => {
  it('GET /documentation should return 200 OK with json', async () => {
    const response = await request(server)
      .get('/documentation')
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).to.be.an('object');
  });
});
