const { User } = require("../models");

const userData = [
  {
    username: "test1",
    email: "test1@email.com",
    password: "test1111",
  },
  {
    username: "test2",
    email: "test2@email.com",
    password: "test2222",
  },
  {
    username: "test3",
    email: "test3@email.com",
    password: "test3333",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
