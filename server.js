var express = require('express');
var app = express();
var mongoose  = require('mongoose');

require('./express-config').expressSetup(app);

try {
  var uri = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/test'; 
  console.log('CONNECTING 2 ====> ', uri);

  mongoose.connect(uri, {}, function(err, db){
    if(err) {
      console.log('Connection Error ::: ', err);
    } else {
      console.log('Successfully Connected!');
    }
  });
} catch(e) {
   console.log("Caught exception trying to connect to database");
   console.log(e);
   console.log(e.message);
   console.log(e.stack);
}

// require('./server/routes')(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port number: ', port);
});