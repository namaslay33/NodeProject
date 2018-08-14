let express = require('express');
let router = express.Router();

router.get('/', function(request, response){

    response.send(`
    <h1> Man's Best Friend</h1>

    <img src="../public/images/dogGroup.png" style="width: 1000px">

    <div>
        <a href="#">Boxer</a>

        <a href="#">Great Dane</a>

        <a href="#">Miniature Schnauzer</a>

        <a href="#">Beagle</a>

        <a href="#">Dalmation</a>
    
    
    </div>
    `)
})

module.exports = router;