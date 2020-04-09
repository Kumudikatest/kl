let AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();

exports.handler = async (event) => {
    try {
        let data = await eventBridge.putEvents({
            Entries: [{
                EventBusName: "ktest",
                Source: "test",
                DetailType: "test",
                Detail: "{}"
            }]
        }).promise();
console.log(data);
    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};