var express = require('express');
var router = express.Router();
const fs = require("fs");
const csvParser = require("csv-parser");
const path = require('path'); 

const imagesRes = [];


/* GET the images folder data */

router.get('/', function(req, res, next) {
  let i = 0;
  let max = 10;
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

         
            images.forEach(function (imageFile) {
              const imagePath = path.join(__dirname, 'visuelle2/images/' + folderName + '/' + imageFile);
             //const imagePath = path.join(__dirname, 'visuelle2/images/' + 'AI17' + '/' + imageFile);
              fs.readFile(imagePath, function(err, image) {
                if (err) throw err // Fail if the file can't be read.
                //console.log('is there imagePath', imagePath)
                if(i < max){
                  imagesRes.push(image.toJSON());
                 console.log(image.toJSON());
                  i++;
                }else{
                  // res.send(imagesRes);
        
                }
                })
              });
          
       

        });
      }); 
  });

  // console.log('What is here', imagesRes);
  //  res.send('hello');
  //res.send(imagesRes.slice(0,5));
  //res.send(im)
});
    

module.exports = router;
