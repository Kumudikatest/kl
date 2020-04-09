let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');
let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.scan({
            TableName: "new"
        }).promise();
        console.log(data);
    } catch (err) {
        // error handling goes here
    };
    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "transaction": "<transaction ID>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    return { "message": "Successfully executed" };
};