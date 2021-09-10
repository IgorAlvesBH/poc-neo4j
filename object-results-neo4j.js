{
  records: [
    Record {
      keys: [Array],
      length: 1,
      _fields: [Array],
      _fieldLookup: [Object]
    }
  ],
  summary: ResultSummary {
    query: {
      text: 'CREATE (a: Person {name: $name}) RETURN a',
      parameters: [Object]
    },
    queryType: 'rw',
    counters: QueryStatistics { _stats: [Object], _systemUpdates: 0 },
    updateStatistics: QueryStatistics { _stats: [Object], _systemUpdates: 0 },
    plan: false,
    profile: false,
    notifications: [],
    server: ServerInfo {
      address: '3.91.25.169:7687',
      version: 'Neo4j/4.3.2',
      agent: 'Neo4j/4.3.2',
      protocolVersion: 4.3
    },
    resultConsumedAfter: Integer { low: 2, high: 0 },
    resultAvailableAfter: Integer { low: 4, high: 0 },
    database: { name: 'neo4j' }
  }
}
