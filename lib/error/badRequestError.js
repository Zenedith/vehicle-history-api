var restify = require('restify');
var util = require('util');

var BadRequestError = function (message) {
  restify.RestError.call(this, {
    restCode: 'BadRequestError',
    statusCode: 400,
    message: message,
    constructorOpt: BadRequestError
  });

  this.name = 'BadRequestError';
  this.body.userMessage = 'Przekazane dane są niepoprawne lub niepełne';

};

util.inherits(BadRequestError, restify.RestError);

exports.BadRequestError = BadRequestError;