const express = require("express");
const router = express.Router(); 


router.get('/', (req, res) => {
    res.send('User list')
} );

router.get('/new', (req, res) => {
    res.send('User New Form')
} )

router.post('/', (req, res) => {
    res.send('Create user')
} );

router
.route('/:id')         // get user with specific ID (:id means dinamic value, we pass the id we want in the url) static routes must come before dinamic routes in the file
.get((req, res) => {  
    console.log(req.user);      
    res.send(`Get user with ID: ${req.params.id}`)
})
.put((req, res) => {         
    res.send(`Update user with ID: ${req.params.id}`)
})
.delete((req, res) => {         
    res.send(`Delete user with ID: ${req.params.id}`)
})

const users = [{name: 'Kyle'}, {name: 'Sally'}];
router.param('id', (req, res, next, id) => {                // this function will run everytime it finds a parameter that matches 'id' (whenever you go to a router that matches 'id' this f. will run )
    req.user = users[id];
    next()
} )                         
module.exports = router;