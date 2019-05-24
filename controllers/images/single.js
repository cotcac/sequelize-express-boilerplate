const multiparty = require('multiparty'); //need this
const path = require('path');
const shortid = require('shortid'); // unique file name
const fs = require('fs'); //this come along with node.
module.exports = function (req, res) {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();
  const form = new multiparty.Form();
  form.parse(req, function (err, fields, files) {
    const img = files.image[0];//array
      fs.readFile(img.path, function (err, data) {
        const newName = shortid.generate();
        const ext = path.extname(img.originalFilename);
        const path_file = "./public/images/" + year + "/" + month + "/" + newName + ext;
        const url = "/images/" + year + "/" + month + "/" + newName + ext;
        fs.writeFile(path_file, data, function (error) {
          if (error) return res.status(500).json(error);
           res.status(200).json({url:url})
        })// end write
      })// end read
  });// end form

}
