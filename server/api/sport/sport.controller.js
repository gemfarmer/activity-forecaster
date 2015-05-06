'use strict';

var _ = require('lodash');

var sports = require('./sports.json');
// Get list of sports
exports.index = function(req, res) {
  res.json(sports);
};