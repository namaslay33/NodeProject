let express = require('express');
let router = express.Router();

router.get('/dogs', function(request, response){
    
    let dataFile = request.app.get("dog");
    let myHTML;
    

    dataFile.forEach(function(item){
        myHTML += `

        <li>
            <h2>${item.Type}</h2>
            <img src="../public/images/${item.Type}.jpg" alt="Dog Pics" style="width: 300px">
            <p>${item.Info}</p>
        </li>
        `;
    })

    

    response.send(`
    <h1>Life is Better with a Dog</h1>
    <h4> Some of the Popular Breeds </h4>
    
    <ul>
        ${myHTML}
    </ul>
    `)
})

    router.get('/dogs/:dogType', function(request, response){

        let dataFile = request.app.get("dog");
        let myHTML;

        let dog = dataFile.dogs[request.params.dogType];

        response.send(`
        <link rel="stylesheet" href="../public/css/dogs.css">
        <h2>${dog.Type}</h2>
        <p>${dog.Info}</p>
        Hello World
    `)
})

module.exports = router;