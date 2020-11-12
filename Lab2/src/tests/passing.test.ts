import { expect } from 'chai';
import * as sa from 'superagent';

describe('homepage passing tests', () => {
  it('should be able to GET', (done) => {
    sa.get('http://localhost:1377/').end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });

  it('should send Hello back', (done) => {
    sa.get('http://localhost:1377/').end((err, res) => {
      expect(res.text).to.include('Hello');
      done();
    });
  });
});