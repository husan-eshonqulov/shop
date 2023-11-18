const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://husan:husan@shop.qbc0hcq.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
