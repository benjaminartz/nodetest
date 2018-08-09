const mongoose = require('mongoose');

const [Schema] = mongoose.Schema;

const NodeTestSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model('NodeTests', NodeTestSchema);
