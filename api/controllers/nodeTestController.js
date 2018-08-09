const mongoose = require('mongoose');

const NodeTest = mongoose.model('NodeTest');

exports.list = function list(req, res) {
  NodeTest.find({}, (err, nodeTest) => {
    if (err) {
      res.send(err);
    }
    res.json(nodeTest);
  });
};

exports.create = function create(req, res) {
  const newNodeTest = new NodeTest(req.body);
  newNodeTest.save((err, nodeTest) => {
    if (err) {
      res.send(err);
    }
    res.json(nodeTest);
  });
};

exports.get = function get(req, res) {
  NodeTest.findById(req.params.NodeTestId, (err, nodeTest) => {
    if (err) {
      res.send(err);
    }
    res.json(nodeTest);
  });
};

exports.update = function update(req, res) {
  NodeTest.findOneAndUpdate(
    { _id: req.params.NodeTestId },
    req.body,
    { new: true },
    (err, nodeTest) => {
      if (err) {
        res.send(err);
      }
      res.json(nodeTest);
    },
  );
};

exports.deleteIt = function deleteIt(req, res) {
  NodeTest.remove({
    _id: req.params.NodeTestId,
  }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'NodeTest successfully deleted' });
  });
};
