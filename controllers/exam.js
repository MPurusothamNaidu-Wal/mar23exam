const { body, validationResult } = require('express-validator');
let username = [];
function getusername(req, res) {
  res.json(username);
}
const createusername = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username field is required')
    .isLength({ min: 5, max: 15 })
    .withMessage('username should contain 5 to 15 chars'),
  body('username').custom((value) => {
    if (value.includes('*') || value.includes('&')) {
      throw new Error("Don't Use special charcters & and *");
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { name } = req.body;
      console.log(req.body);
      username.push({ name });
      res.json({ status: 'adding username successfully' });
    }
  },
];
module.exports = { getusername, createusername };
