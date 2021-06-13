import { GraphQLServer } from "graphql-yoga";
// Type definitions (schema)
const typeDefs = `
 type Query {
 title: String!
 price: Int!
 releaseYear: Int
 rating: Float!
 inStock: Boolean!

 }
`;
// Resolvers
const resolvers = {
  Query: {
    title() {
      return "This is my first query!";
    },
    price() {
      return 1212;
    },
    releaseYear() {
      return 2021;
    },
    rating() {
      return 4.5;
    },
    inStock() {
      return true;
    },
  },
};
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => {
  console.log("The server is up!");
});
