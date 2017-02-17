var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Musculation' });
});

module.exports = router;



/* GET New User page. */
router.get('/general', function(req, res) {
    res.render('general', { title: 'menuGeneral' });
});


router.post('/test', function(req, res) {
	var tavariable = req.body.searchWord;
		res.send(tavariable);

});


