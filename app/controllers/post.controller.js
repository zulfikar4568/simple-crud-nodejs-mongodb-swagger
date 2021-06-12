const db = require('../models');
const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error while retrieving posts"
    });
  });
};

exports.create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false
  });

  post.save(post)
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    res.status(409).send({
      message: error.message || "Some error while create posts"
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
  .then((result) => {
     res.send(result);  
  }).catch((err) => {
    res.status(409).send({
      message: err.message || "Error while search using id"   
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  
  Post.findByIdAndUpdate(id, req.body)
  .then((result) => {
    if (!result){
      res.status(404).send({
        message: "Posts not found"
      });
    }
    else {
      res.send({
        message: "Post updated!"
      });
    }
  }).catch((err) => {
    res.status(409).send({
      message: err.message || "Error while update"   
    });
  });
}
