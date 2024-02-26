
use('learning_database');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Rajesh Patel",
      "price": 2345,
      "college": "iit"
    },
    {
      "name": "Priya Sharma",
      "price": 4567,
      "college": "vit"
    },
    {
      "name": "Amit Singh",
      "price": 3214,
      "college": "nit"
    },
    {
      "name": "Riya Gupta",
      "price": 1789,
      "college": "mit"
    },
    {
      "name": "Karan Malhotra",
      "price": 2890,
      "college": "iit"
    }
  ]);
// Print a message to the output window.
console.log("done inserting data");
