var mysql = require('mysql');

exports.handler = (event, context) => {

  var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : ''
  }); 

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  connection.query("SELECT 'Hello World!';", function (err, result) {
    if (err) throw err;
    console.log(result);
    context.succeed('Success');
  });
    
};

