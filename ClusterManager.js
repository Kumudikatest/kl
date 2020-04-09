module.exports = function() {
    this.clusters = [];

    this.clusters["k"] = {
        host: process.env.EndPoint_redisK,
        port: 6379,
        clusterModeEnabled: false
    };
};