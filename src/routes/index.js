const express = require("express");
const router = express.Router();

router.use('/healthcheck', function(req, res) {
  return res.send({
    message: 'healthcheck'
  });
});

router.use("/category", require('./categoryRoutes'));


module.exports = router;