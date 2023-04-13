//this is the database configuration file

const dbConfig = {
  uri: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = dbConfig;
