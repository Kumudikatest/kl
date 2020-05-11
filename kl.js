let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = function (request, response) {
    translate.translateText({
        SourceLanguageCode: "auto",
        TargetLanguageCode: "en",
        Text: "hola"
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}