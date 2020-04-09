module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["K"] = {
        host: process.env.EndPoint_rdsK,
        port: process.env.Port_rdsK,
        user: process.env.User_rdsK,
        password: process.env.Password_rdsK,
        database: "k"
    };
};