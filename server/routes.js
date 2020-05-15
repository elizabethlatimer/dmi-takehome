const express = require('express');
const router = new express.Router();

// Array of strings formatted as objects to allow strings to have a unique key
// for rendering with .map

const STRINGS = [
  { quote: 'Be yourself; everyone else is already taken.', id: 0 },
  { quote: 'This above all: to thine own self be true.', id: 1 },
  {
    quote: 'If you cannot do great things, do small things in a great way.',
    id: 2,
  },
  { quote: 'Strive not to be a success, but rather to be of value.', id: 3 },
  {
    quote: 'Do not let what you cannot do interfere with what you can do.',
    id: 4,
  },
];

let ID = 5;

router.get('/', (req, res) => {
  res.json(STRINGS);
});

router.post('/add', (req, res) => {
  STRINGS.unshift({ quote: req.body.quote, id: ID });
  ID += 1;
  return res.status(201).json({ id: STRINGS[0].id });
});

module.exports = router;
