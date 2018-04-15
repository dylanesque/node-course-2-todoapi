const  { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to server!');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').find().count().then((count) => {
    console.log(`todos count: ${count}`);
    console.log(JSON.stringify(result.ops, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

 //  db.close();
});