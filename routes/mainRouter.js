const expres = require('express');
const router = expres.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.index);
router.get('/menuDetail/:id', controller.menuDetail);

module.exports = router;