var express = require('express');
var router = express.Router();
const fs = require("fs");
const csvParser = require("csv-parser");
const path = require('path'); 
const filePath = path.join(__dirname, 'visuelle2/sales.csv');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET the visuelle2 sales.CSV data */

// const result = [];

// fs.createReadStream(filePath)
//   .pipe(csvParser())
//   .on("data", (data) => {
//     result.push(data);
//   })
//   .on("end", () => {
//     console.log(result);
//   });

/* GET the images folder data */

//joining path of directory 
const imagesPath = path.join(__dirname, 'visuelle2/images');
//passsing imagesPath and callback function
fs.readdir(imagesPath, function (err, imageFolders) {
    //handling error
    if (err) {
        return console.log('Unable to scan visuelle2/images: ' + err);
    } 
    imageFolders.forEach(function (folderName) {
      //joining path of directory 
      const imagesPath = path.join(__dirname, 'visuelle2/images/' + folderName);
      //passsing imagesPath and callback function
      fs.readdir(imagesPath, function (err, images) {
        //handling error
        if (err) {
          return console.log('Unable to scan imagesPath: ' + err);
        } 
        //listing all images using forEach
        images.forEach(function (image) {
          // Do whatever you want to do with the image
          console.log(image); 
        });
      });
    });
});
    

module.exports = router;
