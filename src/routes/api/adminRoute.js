const path = require('path');
const express = require('express');
const {authenticateToken, login, register} =
    require('../../controllers/authController.js');
const {addDrug, editDrug, searchDrug} =
    require('../../controllers/manageController.js')

const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
})

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/login.html'));
});

// auth
router.post('/admin', login);
router.post('/admin/register', authenticateToken, register);

// manage db
router.post('/admin/addD', authenticateToken, addDrug);
router.post('/admin/editD', authenticateToken, editDrug);

// search db
router.post('/admin/searchD', authenticateToken, searchDrug);


// catch all other routes
router.get('*', (req, res) => {res.status(404).send('Page not found!')})



module.exports = router;
