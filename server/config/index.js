const _ = require("lodash");

const commonConfig = {
 
  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

}


const envConfig = require(`./${process.env.NODE_ENV}`);

module.exports = _.merge(commonConfig, envConfig || {});