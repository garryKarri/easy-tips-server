const router = require('express').Router();


router.route('/')
  .get(async (req, res) => {
    try {
      res.send('hi');
    } catch (error) {
      res.sendStatus(418);
    }
  })

module.exports = router;
