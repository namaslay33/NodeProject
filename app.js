let express = require('express');
let app = express();
let data = require('./data/dog.json');

app.set('dog', data);

app.use('/public', express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/dogs'));
// app.use(require('./routes/feedback'));
// app.use(require('./routes/api'));

app.listen(7000, () =>{
    console.log('listening on port 7000');
})