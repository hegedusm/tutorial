import * as express from "express";
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/hello', (req, res) => {
  res.send('world');
});
router.get('/hello/world', (req, res) => {
  res.send('good day to you');
});

module.exports = router;