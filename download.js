var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){

        request(uri).pipe(
                fs.createWriteStream(filename)
                    .on('error', function(err){
                        callback(error, filename); 
                        stream.read();
                    })
                )
          .on('error', callback)
          .on('close', callback);
    });
};

module.exports = download;
