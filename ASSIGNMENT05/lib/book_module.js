
var Book = require("../models/book.js");

// THIS prints out ALL contents of this database
exports.getAll = () => {
  return Book.find({}, (err, result) => {
    if (err) {
      return err;
    }
    // LINE BELOW will print out number of items in database
    console.log(result.length);
    // LINE BELOW will render result to web-client-page
    return result;
  });
};


// // return a single record
// Book.findOne({'title':'clerks'}, (err, item) => {
//   if (err) return err;
//   console.log(item);
//   // other code here
// }); 

// return a single record
// exports.findOne = () => {
//   Book.findOne({'title':'clerks'}, (err, item) => {
//     if (err) return err;
//     console.log(item);
//     // other code here
//     return item;
//   });
// };






// UNCOMMENT LINES BELOW TO TEST getAll functionality
// console.log(this.getAll().then((items) => {
//     console.log(items);
// }));
// console.log();
// console.log();

