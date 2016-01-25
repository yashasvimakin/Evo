exports.render = function(req, res) {
    res.render('index', {
    	title: 'Evo',
    	user: req.user ? req.user.username : ''
    });
};