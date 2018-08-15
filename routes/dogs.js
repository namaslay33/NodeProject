let express = require('express');
let router = express.Router();

router.get('/dogs', function(request, response){
    
    let dataFile = req.app.get("appData");
    let myHTML;

    dataFile.dogs.forEach(function(breed){
        myHTML += `

        <li>
            <h2>${breed.Type}</h2>
            <img src="../images/dogs/${breed.}
            <p>${breed.Info}</p>
        </li>
        `;
    })

    response.send(`
    <h1>Life is Better with a Dog</h1>
    <h4> Some of the Favorite Breeds </h4>
    
    <ul>
        ${myHTML}
    </ul>
   
    
    `)
})


    router.get('/dogs/:type', function(request, response){

        let dogFile = req.app.get("apData");
        let myHTML;

        let dogs = dogFile.dog[req.params.type];

        response.send(`
        Hello World
    `)
})

module.exports = router;