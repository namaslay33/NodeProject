let express = require('express');
let app = express();
let data = require('./data/dog.json');

app.use(express.static('/routes/'));

app.listen(7000, () =>{
    console.log('listeining on port 7000');
})