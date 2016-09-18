var router = require('express').Router();

router.get('/skills', function(req, res) {
	res.status(200).send({
		id: '102',
		name: 'Java'
	});
});

module.exports = router;
