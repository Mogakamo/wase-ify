const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get(() => {
    User.find{}
    .then(users => res.json(users))
    .catch (err => res.status(400).json('Error: '))
})