'use strict';
const User = require('../models/users-model.js');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { next('Invalid Login') }
    try {
        const token = req.headers.authorization
            .split(' ').pop();

        const user = await User.authenticateWithToken(token);

        req.user = user;
        next();
    } catch (error) {
        res.status(403).send('Invalid Login');
    }
}