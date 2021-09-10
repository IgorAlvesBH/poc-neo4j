const neo4j = require('neo4j-driver');
const conf = require('../../conf');

const neo4jClient = (() => {
  const run = async (command, params) => {
    const driver = neo4j.driver(conf.neo4j.uri, neo4j.auth.basic(conf.neo4j.user, conf.neo4j.password));
    const session = driver.session();
    try {
      const result = await session.run(command, params);
      return result;
    } finally {
      session.close();
    }
  };

  const createNode = async (label, params) => {
    const alias = label.charAt(0).toLowerCase();
    const properties = Object.keys(params).map((key) => `${key}:$${key}`).toString();
    const result = await run(`CREATE (${alias}: ${label} {${properties}}) RETURN ${alias}`, params);
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);
    return {
      node
    };
  };

  const createRelationship = async (name, firstNode, secondNode, condition) => {
    const firstNodeAlias = firstNode.charAt(0).toLowerCase();
    const secondNodeAlias = secondNode.charAt(0).toLowerCase();
    const relationshipAlias = name.charAt(0).toLowerCase();
    const result = await run(`MATCH (${firstNodeAlias}:${firstNode}), (${secondNodeAlias}:${secondNode})
    WHERE ${condition}
    CREATE (${firstNodeAlias})-[${relationshipAlias}:${name}]->(${secondNodeAlias})
    RETURN ${firstNodeAlias}, ${relationshipAlias}, ${secondNodeAlias}`);
    const singleRecord = result.records[0];
    const relationship = singleRecord.get(0);
    return {
      relationship
    };
  }

  return {
    createNode,
    createRelationship
  }
})();

module.exports = neo4jClient;
