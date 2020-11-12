import { expect } from 'chai';
import * as sa from 'superagent';

describe('homepage failing tests', () => {
  it('should send World back', (done) => {
    sa.get('http://localhost:1377/').end((err, res) => {
      expect(res.text).to.include('World');
      done();
    });
  });
});