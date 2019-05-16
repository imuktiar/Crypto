const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  testMongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-test',
  port: process.env.PORT || 5000,
  api : process.env.API || "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=b189f5872b2ab1baf3addc452f2b381369264d2063c482e125dee60b8cb08ad8"
};

module.exports = config;
