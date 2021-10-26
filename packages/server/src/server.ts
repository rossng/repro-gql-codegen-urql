import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";

const typeDefs = importSchema("../../schema.graphql");

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
