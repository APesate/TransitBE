var request = require('request');

exports.getLines = function (callback) {
    var body = [];

    request("http://www.itranvias.com/queryitr.php?&dato=0&func=1")
        .on('error', function(error) {
            callback.error(error);
        })
        .on('data', function (chunk) {
            body.push(chunk);
        })
        .on('end', function () {
            body = Buffer.concat(body).toString();
            callback.end(body);
        });
}

exports.stops = function (id, callback) {
    var body = [];

    request("http://www.itranvias.com/queryitr.php?&dato=" + id + "&func=2")
        .on('error', function(error) {
            callback.error(error);
        })
        .on('data', function (chunk) {
            body.push(chunk);
        })
        .on('end', function() {
            body = Buffer.concat(body).toString();
            callback.end(body);
        });
}

exports.routes = function (id, callback) {
    var body = [];

    request("http://www.itranvias.com/queryitr.php?&dato=" + id + "&mostrar=PRB&func=99")
        .on('error', function(error) {
            callback.error(error);
        })
        .on('data', function (chunk) {
            body.push(chunk);
        })
        .on('end', function() {
            body = Buffer.concat(body).toString();
            body = JSON.parse(body);
            var routes = body.mapas[1].recorridos;
            callback.end(JSON.stringify(routes));
        });
}
