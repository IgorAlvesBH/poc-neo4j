const neo4jControllers = require('./controllers');

const neo4jRoutes = (router) => {
  router.post('/nodes', neo4jControllers.postNodes);
};

module.exports = neo4jRoutes;
