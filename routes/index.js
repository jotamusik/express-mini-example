const router = require('express').Router();

const { authenticate } = require('../middleware');

const { sayHello, getVolunteerById } = require('../domain/actions');


router.get('/', authenticate, (req, res) => {
  const data = sayHello();
  return res.send(data);
});

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new Error('Bad request');
  }

  const volunteer = getVolunteerById(parseInt(id, 10));
  return res.send(volunteer);
});

module.exports = router;
