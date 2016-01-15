import assert from 'assert';
import nodeWeixinCard from '../lib';

describe('node-weixin-card', function () {
  it('should have types', function () {
    assert.equal(true, typeof nodeWeixinCard.types === 'object');
    assert.equal(true, typeof card === 'object');
  });
});
