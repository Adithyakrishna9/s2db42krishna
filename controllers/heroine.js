var Heroine = require('../models/heroine');
// List of all heroines
exports.heroine_list = async function (req, res) {
    try {
        theHeroines = await Heroine.find();
        res.send(theHeroines);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific heroine.
exports.heroine_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Heroine detail: ' + req.params.id);
};
// Handle Heroine create on POST.
exports.heroine_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Heroine();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"heroine_name":"Mustang GT", "heroine_color":"Lucid Red Pearl", "heroine_cost":37000}
    document.heroine_name = req.body.heroine_name;
    document.heroine_cost = req.body.heroine_cost;
    document.heroine_color = req.body.heroine_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle heroine delete form on DELETE.
exports.heroine_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Heroine delete DELETE ' + req.params.id);
};
// Handle heroine update form on PUT.
exports.heroine_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Heroine update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.heroine_view_all_Page = async function (req, res) {
    try {
        theHeroines = await Heroine.find();
        res.render('heroines', { title: 'Heroine Search Results', results: theHeroines });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};