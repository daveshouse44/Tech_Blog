const { Post } = require("../models");

const postData = [
  {
    title: "Test 1",
    content: "This is the first test content on the blog.",
    user_id: 1,
  },
  {
    title: "Test 2",
    content: "This is the second test content on the blog.",
    user_id: 2,
  },
  {
    title: "Test 3",
    content: "This is the third test content on the blog.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
