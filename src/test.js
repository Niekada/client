const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${REACT_APP_UNSPLASH_KEY}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Forum").collection("Question");
  console.log(collection.id);
  client.close();
});