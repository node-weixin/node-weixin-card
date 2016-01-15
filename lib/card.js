var baseUrl = 'https://api.weixin.qq.com/card/';
var uploadUrl = 'https://api.weixin.qq.com/cgi-bin/media/';

var send = require('./send');
var sendFile = require('./send-file');

module.exports = {
  get: function (app, cardId, cb) {
    send(app, baseUrl + 'get?', {card_id: cardId}, cb);
  },
  remove: function (app, cardId, cb) {
    send(app, baseUrl + 'delete?', {card_id: cardId}, cb);
  },
  create: function (app, card, cb) {
    send(app, baseUrl + 'create?', {card: card}, cb);
  },
  update: function (app, data, cb) {
    send(app, baseUrl + 'update?', data, cb);
  },
  uploadLogo: function (app, path, cb) {
    sendFile(app, uploadUrl + 'uploadimg?', path, cb);
  },
  landingPage: function (app, data, cb) {
    send(app, baseUrl + 'landingpage/create?', data, cb);
  },
  qrcode: function (app, data, cb) {
    send(app, baseUrl + 'qrcode/create?', data, cb);
  },
  query: function (app, cardId, code, cb) {
    send(app, baseUrl + 'code/get?', {
      card_id: cardId,
      code: code,
      check_consume: true
    }, cb);
  },
  consume: function (app, cardId, code, cb) {
    var data = {
      code: code
    };
    if (cardId) {
      data.card_id = cardId;
    }
    send(app, baseUrl + 'code/consume?', data, cb);
  },
  decrypt: function (app, code, cb) {
    send(app, baseUrl + 'code/decrypt?', {encrypt_code: code}, cb);
  },
  list: function (app, openid, cardId, cb) {
    var data = {openid: openid};
    if (cardId) {
      data.card_id = cardId;
    }
    send(app, baseUrl + 'user/getcardlist?', data, cb);
  },
  stock: function (app, cardId, value, cb) {
    var data = {card_id: cardId};
    if (value >= 0) {
      data.increase_stock_value = value;
    } else {
      data.reduce_stock_value = Math.abs(value);
    }
    send(app, baseUrl + 'modifystock?', data, cb);
  },
  unavailable: function (app, cardId, code, cb) {
    var data = {
      code: code
    };
    if (cardId) {
      data.card_id = cardId;
    }
    send(app, baseUrl + 'code/unavailable?', data, cb);
  }
};
