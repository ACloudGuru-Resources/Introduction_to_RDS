const { Client } = require('pg')

exports.handler = function(event, context, callback) {   

  const client = new Client()

  client.connect()

  client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World!
    client.end()    
    callback(err, res);
  });

}