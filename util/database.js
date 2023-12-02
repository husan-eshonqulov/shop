const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://husan:husan@shop.qbc0hcq.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Mongodb connected!');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
