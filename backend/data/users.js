import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Lwin',
    email: 'john@example.com',
    password: bcrypt.hashSync('john1234', 10),
  },
  {
    name: 'Htet Lin',
    email: 'htet@example.com',
    password: bcrypt.hashSync('htet1234', 10),
  },
];

export default users;
