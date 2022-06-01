const operators      = module.exports = {};
operators['OR']      = require('./or');
operators['AND']     = require('./and');
operators['NOT']     = require('./not');
operators['OR NOT']  = require('./or-not')(operators);
operators['AND NOT'] = require('./and-not')(operators);
