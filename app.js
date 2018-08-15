let express = require('express');
let app = express();
let data = require('./data/dog.json');

app.set('appData', data);

app.use('/public', express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/dogs'));

app.listen(7000, () =>{
    console.log('listening on port 7000');
})