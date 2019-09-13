let config = {};

config.dbHost = process.env.dbHost || "localhost";
config.dbPort = process.env.dbPort || "27017";
config.dbName = process.env.dbName || "lol-champions-app";
config.serverPort = process.env.serverPort || 3001;

export default config;
