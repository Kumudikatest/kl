let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "cloud9-ktest",
            MaxKeys: 10
        }).promise();
console.log(data);
    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};