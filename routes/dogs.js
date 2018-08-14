let express = require('express');
let router = express.Router();

router.get('/dogs', function(request, response){
    
    response.send(`
    
    <div>
    <h1>Life is Better with a Dog</h1>
    </div>

    <h4> Some of the Favorite Breeds </h4>
    

    <script src="../data/dog.json"></script>
    `);
})

module.exports = router;