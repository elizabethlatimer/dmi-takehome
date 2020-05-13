const express = require('express');
const router = new express.Router();

const STRINGS = [
  'Be yourself; everyone else is already taken.',
  'This above all: to thine own self be true.',
  'If you cannot do great things, do small things in a great way.',
  'Strive not to be a success, but rather to be of value.',
  'Do not let what you cannot do interfere with what you can do.',
  'I haven’t failed. I’ve just found 10,000 ways that won’t work.',
];

router.get('/', (req, res) => {
  res.json(STRINGS);
});

router.post('/add', (req, res) => {
  STRINGS.unshift(req.body.quote);
  return res.status(201).json(`Successfully Added Quote`);
});

module.exports = router;
