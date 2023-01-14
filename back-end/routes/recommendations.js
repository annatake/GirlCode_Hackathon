var express = require('express');
var router = express.Router();
const fs = require("fs");
//const csvParser = require("csv-parser");
const path = require('path'); 

let recommendations = [
   {heading: "Grazia Sweater",
    description: "Ciao. This is a fully fashioned crew-neck sweater with shoulder pads. It’s knit with Embrace MerinoTM"},
    {heading: "Ty Cardigan",
    description:"This is a fully fashioned open-front cardigan with a removable belt and patch pockets. It’s knit with Wonder Yarn"}
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(recommendations);
});


/* GET the recommendations data */

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

    

module.exports = router;
