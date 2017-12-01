var restify = require('restify-clients');

function CartoesClient(){
  this._cliente = restify.createJsonClient({
    url:'http://localhost:3001'
  });
}

CartoesClient.prototype.autoriza = function(cartao, callback){
  this._cliente.post('/cartoes/autoriza', cartao , callback);
}

module.exports = function(){
  return CartoesClient;
}


/*
var restify = require('restify');

function CartoesClient() {
  this._client = restify.createJsonClient({
    url: 'http://localhost:3001',
    version: '~1.0'
  });
}

CartoesClient.prototype.autoriza = function(cartao, callback) {
  this._client.post('/cartoes/autoriza', cartao, callback);
}

module.exports = function(){
    return CartoesClient;
};
*/
