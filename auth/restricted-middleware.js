// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  // We shouldn't be grabbing username and password from a header
  // We should simply use a cookie/JWT
  // const { username, password } = req.headers;

  // Make sure cookie is valid
  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  // if (user && bcrypt.compareSync(password, user.password)) {

  // As long as someone has a username and password
  // that has already been validated, they should have access
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }

  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
};
