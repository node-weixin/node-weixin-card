var assert = require('assert');
var nodeWeixinCard = require('../lib');

var app = {
  id: process.env.APP_ID,
  secret: process.env.APP_SECRET,
  token: process.env.APP_TOKEN
};
var card = require('./create_card.json');
var test_card_id = '';

describe('node-weixin-card', function () {

  it('should have types', function (done) {
    assert.equal(true, typeof nodeWeixinCard.types === 'object');
    assert.equal(true, typeof nodeWeixinCard.card === 'object');
    done();
  });

  it('should upload a logo image file', function (done) {
    nodeWeixinCard.card.uploadLogo(app, 'test/image.jpg', function (err, resp) {
      assert.equal(true, !err);
      assert.equal(true, resp.url !== '');
      done();
    });
  });

  it('should create a card', function (done) {
    nodeWeixinCard.card.create(app, card, function (err, resp) {
      assert.equal(true, resp.errcode === 0);
      assert.equal(true, resp.errmsg === 'ok');
      test_card_id = resp.card_id;
      done();
    });
  });

  it('should get a card', function (done) {
    nodeWeixinCard.card.get(app, test_card_id, function (err, resp) {
      assert.equal(true, resp.errcode === 0);
      assert.equal(true, resp.errmsg === 'ok');
      done();
    });
  });

  it('should update a card', function (done) {
    var update_card = {
      card_id: test_card_id,
      groupon: {
        base_info: {
          logo_url: card.groupon.base_info.logo_url,
          color: nodeWeixinCard.types.color.Color020,
          notice: '不找零不退换，逾期概不兑换。',
          description: '价值10元代金券1张，满100元可使用~'
        }
      }
    };
    nodeWeixinCard.card.update(app, update_card, function (err, resp) {
      console.log(resp);
      assert.equal(true, resp.errcode === 0);
      assert.equal(true, resp.errmsg === 'ok');
      done();
    });
  });

  it('should increase +10 stocks', function (done) {
    nodeWeixinCard.card.stock(app, test_card_id, 10, function (err, resp) {
      assert.equal(true, resp.errcode === 0);
      assert.equal(true, resp.errmsg === 'ok');
      done();
    });
  });

  it('should remove a card', function (done) {
    nodeWeixinCard.card.remove(app, test_card_id, function (err, resp) {
      assert.equal(true, resp.errcode === 0);
      assert.equal(true, resp.errmsg === 'ok');
      done();
    });
  });

});
