let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = async (event) => {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'K'
    }, function (error, connection) {
        if (error) {
            throw error;
            console.log(error);
        }
        console.log(connection);
        connection.end();
        
    });

    return { "message": "Successfully executed" };
};