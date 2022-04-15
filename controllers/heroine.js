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
// exports.heroine_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: Heroine detail: ' + req.params.id);
// };
exports.heroine_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Heroine.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
// exports.heroine_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: Heroine update PUT' + req.params.id);
// };
// Handle Costume update form on PUT. 
exports.heroine_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Heroine.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.heroine_name)  
               toUpdate.heroine_name = req.body.heroine_name; 
        if(req.body.heroine_cost) toUpdate.heroine_cost = req.body.heroine_cost; 
        if(req.body.heroine_color) toUpdate.heroine_color = req.body.heroine_color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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