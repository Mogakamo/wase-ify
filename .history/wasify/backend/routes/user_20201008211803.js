const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get(() => {
    User.find{}
    .then(users => reseBy.json(users))
    .catch (err => res)
})