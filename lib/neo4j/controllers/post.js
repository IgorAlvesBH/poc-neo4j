const neo4jServices = require('../services');

const neo4jController = (() => {
  const postNodes = async (req, res) => {
    try {
      const { name } = req.body;
      const result = await neo4jServices.createNode({ name });
      res.status(201).send(result);
    } catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

  return {
    postNodes
  };
})();

module.exports = neo4jController;
