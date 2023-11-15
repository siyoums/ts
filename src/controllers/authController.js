const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/database')
const hashPassword = require('../helpers/hash');
const {loginAuthSchema, regAuthSchema, handleErrors} =
    require('../helpers/validate')


const SECRET_KEY =
    process.env
        .JWT_SECRET;  // Keep this secret and maybe use a more complex key

function authenticateToken(req, res, next) {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];

  const token = req.cookies.OAuth_SESH;
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user.username;
      next();
    });

  } else {
    return;
  }
}

function removeSpaces(input) {
  return input.replace(/\s/g, '');
}

// login controller
const login = async (req, res) => {
  const username = removeSpaces(req.body.username);
  const password = removeSpaces(req.body.password);

  try {
    // Fetch the user from the database

    const isValid = loginAuthSchema.validate(req.body);

    if (!isValid.error) {
      const query = `SELECT * FROM Users WHERE username = ?`;
      db.query(query, [username], (err, result) => {
        if (err) throw err;

        const user = result[0];

        if (!user) return res.status(400).json({err: 'User not found.'})

          // Check password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch)
              return res.status(400).json({err: 'Invalid password'});

            // Generate JWT token
            const token = jwt.sign(
                {username: user.username, role: user.role}, SECRET_KEY);

            // Define cookie options
            const cookieOptions = {
              httpOnly: true,  // Prevent client-side JavaScript access
              // secure: true,    // Only send the cookie over HTTPS
              maxAge: 6 * 60 * 60 * 1000,  // 6 hours in milliseconds
            };

            res.cookie('OAuth_SESH', token, cookieOptions);
            res.json({tkn: token, msg: 'Logging you in...'});
          });
      });



    } else
      throw isValid.error;



  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({err: errors});
  }
};

// register controller
const register =
    async (req, res) => {
  let {username, email, password, firstName, lastName, role} = req.body;

  try {
    const isValid = regAuthSchema.validate(req.body);

    if (!isValid.error) {
      // hash usr password
      password = await hashPassword.hash(password);


      const query = `INSERT INTO Users (username, password, role, email,
                firstName, lastName, dateRegistered)
             VALUES (?, ?, ?, ?, ?, ?, NOW())`;

      const values = [username, password, role, email, firstName, lastName];

      db.query(query, values, (err, result) => {
        if (err) throw err;

        // Generate JWT token
        // const token = jwt.sign({username, role}, SECRET_KEY);
        // res.json({tkn: token, msg: 'Signing you in...'});
      });


    } else
      throw isValid.error;

  } catch (err) {
    const errors = handleErrors(err);
    // res.status(400).json({err: errors})
    // console.error(err);
  }
}



                        module.exports = {
  authenticateToken,
  login,
  register
};
