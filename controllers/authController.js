const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // in-memory DB

exports.registerUser = (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { id: users.length + 1, email, password: hashedPassword, role };
  users.push(newUser);
  res.status(201).json({ message: 'User registered', user: newUser });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
};
