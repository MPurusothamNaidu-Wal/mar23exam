var express = require('express');
var router = express.Router();
const connector = require('../connect');
router.get('/createtable', function (req, res) {
  console.log(connector);
  const sql =
    'CREATE TABLE user (email VARCHAR(100),password varchar(100), userinfo varchar(70), dob DATE)';
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});

router.post('/', function (req, res) {
  const { email, password, userinfo, dob } = req.body;
  const sql = `INSERT INTO user VALUES ("${email}","${password}", "${userinfo}", "${dob}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});

router.get('/', function (req, res) {
  const sql = `SELECT * FROM user`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.delete('/:email', function (req, res) {
  let email = req.params.email;
  const sql = `DELETE FROM user WHERE email = "${email}" `;
  connector.query(sql, (err, results, fields) => {
    res.json({ err, results, fields });
  });
});
router.get('/deleteall', function (req, res) {
  const sql = `DELETE FROM user`;
  connector.query(sql, function (err, results, fields) {
    res.json({ results });
  });
});
router.put('/:email', function (req, res) {
  const { email, password, userinfo, dob } = req.body;
  const sql = `UPDATE user set Email = "${email}", Password = "${password}", userinfo = "${userinfo}" ,dob="${dob}" `;
  connector.query(sql, function (err, results, fields) {
    res.json({ results });
  });

  connector.query(sql);
});
module.exports = router;
