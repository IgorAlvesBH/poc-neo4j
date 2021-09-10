const neo4jClient = require('../../clients/neo4j');

const createNode = (params) => neo4jClient.createNode('Person', params);

module.exports = {
  createNode
};
