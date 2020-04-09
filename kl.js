let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = async (event) => {

    // You must always quit the redis client after it's used
    redis.rename({
        clusterIdentifier: 'k',
        params: [{
            key: 'k',
            name: '1'
        }]
    }, function (error, response, redisClient) {
        if (error) {
            callback(error);
        } else {
            redisClient.quit();
        }
    });

    return { "message": "Successfully executed" };
};