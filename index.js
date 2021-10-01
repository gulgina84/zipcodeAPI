const db = require('./db');

const express = require('express');

const cors = require('cors');

const app = express();

app.get('/insert/:zipcode', (req, res) => {
  if(req.params['zipcode'].length === 5) {
    var insertZipCode = req.params['zipcode'];
    if(!db.has(insertZipCode)) {
      db.add(insertZipCode);
      console.log(db);
    }
    res.send(`Zip code ${insertZipCode} inserted.`);
  } else {
    res.send(`Zip code ${insertZipCode} is invalid`)
  }
});


app.get('/delete/:zipcode', (req, res) => {
  var deleteZipCode = req.params['zipcode'];
  if(db.has(deleteZipCode)) {
    db.delete(deleteZipCode);
    console.log(db);
    res.send(`Zip code ${deleteZipCode} deleted.`);
  }
})

app.get('has/:zipcode',(req, res) => {
  var checkZipCode = req.params['zipcode'];
  res.send(db.has(checkZipCode));
})

app.get('/display', (req, res) => {
  var result = Array.from(db).sort();
  var output = '';
  var i = 0;
  var j = 1;

  while (j <= result.length) {
    if (result[j] - result[j-1] === 1) {
      j++;
    } else {
      if (j - i > 1) {
        output += `${result[i]}-${result[j - 1]}, `
      } else {
        output += `${result[i]}, `
      }
       i = j;
       j++;
    }

  }
  output = output.substring(0,output.length - 2);
  console.log('output',output);
  res.send(output);
})

app.listen(3000, () => {
  console.log('listening at port 3000');
})

