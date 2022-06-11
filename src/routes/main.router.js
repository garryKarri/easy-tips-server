const router = require('express').Router();


router.route('/')
  .get(async (req, res) => {
    try {
      res.json({hi:'1'});
    } catch (error) {
      res.sendStatus(418);
    }
  })

module.exports = router;
