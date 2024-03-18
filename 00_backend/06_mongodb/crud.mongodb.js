use("crud_db")

// db.createCollection("courses")

// db.courses.insertMany([
//   {
//     name: "sumit learning2",
//     price: 345,
//     assignments: 14,
//     projects: 156,
//   },
//   {
//     name: "sumit learning1",
//     price: 223,
//     assignments: 18,
//     projects: 132,
//   },
//   {
//     name: "sumit learning3",
//     price: 467,
//     assignments: 12,
//     projects: 189,
//   },
//   {
//     name: "sumit learning2",
//     price: 401,
//     assignments: 15,
//     projects: 174,
//   },
//   {
//     name: "sumit learning1",
//     price: 298,
//     assignments: 17,
//     projects: 143,
//   },
//   {
//     name: "sumit learning3",
//     price: 152,
//     assignments: 11,
//     projects: 105,
//   },
//   {
//     name: "sumit learning2",
//     price: 489,
//     assignments: 19,
//     projects: 198,
//   },
//   {
//     name: "sumit learning1",
//     price: 176,
//     assignments: 13,
//     projects: 121,
//   },
//   {
//     name: "sumit learning3",
//     price: 432,
//     assignments: 16,
//     projects: 167,
//   },
//   {
//     name: "sumit learning2",
//     price: 267,
//     assignments: 10,
//     projects: 114,
//   },
// ]);


// let a = db.courses.find({price: 267})
// console.log(a.toArray())

let b = db.courses.findOne({price:267})  // this the fist one he find
console.log(b)

// update

db.courses.updateOne({price:267}, {$set:{price:5000}}) // this the second one

db.courses.updateMany({price:267}, {$set:{price:5000}}) // this the second oneg


// delete

db.courses.deleteOne({price:5000})

db.courses.deleteMany({price:5000})