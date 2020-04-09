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

    return { "message": "Successfully executed" };
};