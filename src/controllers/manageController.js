const path = require('path');
const db = require('../config/database');
const {handleErrors} = require('../helpers/validate');

// const upload = multer({
//   dest: '/path/to/temporary/directory/to/store/uploaded/files'
//   // you might also want to set some limits:
//   // https://github.com/expressjs/multer#limits
// });


// add drug
const addDrug =
    (req, res) => {
      const drugData = req.body;

      const sql = 'INSERT INTO Products SET ?';

      db.query(sql, drugData, (error, results, fields) => {
        if (error) {
          //   console.error('Database error:', error);
          const errors = handleErrors(
              error);  // Handle the error using your handleErrors function
          res.json({err: `${errors}`});
          return;
        }
        console.log('Inserted drug with ID:', results.insertId);
        res.json({msg: `Inserted drug with ID: ${results.insertId}`})
      });
    }


// edit drug
const editDrug =
    (req, res) => {
      console.log('hello');
    }



// search drug
const searchDrug =
    async (req, res) => {
  try {
    let searchTerm = req.body;  // Get this from user input
    db.query(
        'SELECT * FROM Products WHERE (ProductName LIKE ? OR API LIKE ? OR Manufacturer LIKE ?) AND ProductType = ?',
        [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`, 'Drug'],
        (error, results) => {
          if (error) throw error;
          res.json({searchRes: results, len: results.length});
        });


  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
  }
}



                        module.exports = {
  addDrug,
  searchDrug,
  editDrug
};