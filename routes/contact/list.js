const mdl = require('../../db/mdl_contact');
module.exports = function(req, res){
  const page = parseInt(req.query.page) || 1;
  const sort ={date: -1};
  const query ={};
  const get = {};

  mdl.findAll(query, get, sort, page, (err, data) =>{
    if(err) return res.sendStatus(500);
    let next_page;
    if (data.length > 24) {
       next_page = page + 1;
      data.pop();
    } else {
       next_page = 0;
    }
    const json = {};
    json.data = data;
    json.next = next_page;
    json.urlMiddle ='?'
    res.json(json)
  })
}
