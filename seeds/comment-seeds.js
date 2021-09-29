const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great comment!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Also a great comment!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Still a great comment!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
