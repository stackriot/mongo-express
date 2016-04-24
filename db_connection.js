var mongoose  = require('mongoose');

function makeDefaultConnection() {
  var uri = process.env.MONGOLAB_URI;

  mongoose.connect(uri, {}, function(err, db){
    if(err){
      console.log('Connection Error ::: ', err);
    } else {
      console.log('Successfully Connected!');
    }
  });
}

module.exports.defaultConnection = makeDefaultConnection();