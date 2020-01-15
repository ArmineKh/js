var mongo = require("mongodb").MongoClient;


mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err) console.log(err);

    var parrots = db.collection('parrots');
    var arg = parseInt(process.argv[2]);

    var result = parrots.find({age:{$gt:arg}});

    result.toArray(function(err,docs){
        if(err) console.log(err);
        console.log(docs);
        db.close();
    });

});
{
      "_id": "robert",
      "type": "human"
    }

curl -X GET http://127.0.0.1:5984/things-learn-couchdb


curl -X GET http://localhost:5984/things-learn-couchdb/_design/thingsMadeOfMetal/_view/thingsMadeOfMetal?material="metal"
