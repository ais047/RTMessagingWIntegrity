const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./graphql/resolvers');
const schema = require('./graphql/schema');
const typeDefs = gql(schema);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const { syncMySqlDB } = require('./utils/cmdutils');
// syncMySqlDB()
// const { CryptoBlock, CryptoBlockchain } = require('./blockchain');

// let msgCoin = new CryptoBlockchain();

// console.log(msgCoin)
// msgCoin.addNewBlock(new CryptoBlock(1, "01/06/2020", {sender: "Iris Ljesnjanin", recipient: "Cosima Mielke", quantity: 50}));

// console.log(msgCoin)
// msgCoin.addNewBlock(new CryptoBlock(2, "01/07/2020", {sender: "Vitaly Friedman", recipient: "Ricardo Gimenes", quantity: 100}) );

// console.log(msgCoin)
