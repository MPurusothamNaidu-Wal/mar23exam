const { body, validationResult } = require('express-validator');
const hobby = require('../models/hobby');
function gethobby(req, res) {
  hobby.find((err, hobbys_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hobbys_list);
    }
  });
}
const createhobby = [
  (req, res) => {
    console.log(req.body);
    let { name, description, doc } = req.body;
    let hobbyObject = new hobby({ name, description, doc });
    hobbyObject.save((error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ status: 'adding hobby complete' });
      }
    });
  },
];
function deletehobby(req, res) {
  hobby.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`hobby with id as ${req.params.id} is removed`);
    }
  });
}
module.exports = { gethobby, createhobby, deletehobby };
