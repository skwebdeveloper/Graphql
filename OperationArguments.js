import { GraphQLServer } from "graphql-yoga";

// *!Schema
const typeDefs = `
 type Query{
// *!Operation Arguments 
add(a: Float!, b: Float! ): Float!
`;

// *!Resolvers
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
        return `${a + b}`;
      } 
    },
  },


const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => {
  console.log("The server is up!");
});
