const functions = require('firebase-functions');

const body = '{body}';

exports.handler = functions.https.onRequest((request, response) => {
  response.send(body);
});
