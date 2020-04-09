let AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {

    try {
        let data = await rekognition.detectText({
            Image: {
                S3Object: {
                    Bucket: "cloud9-ktest",
                    Name: "thisround1"
                }
            }
        }).promise();
console.log(data);
    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};