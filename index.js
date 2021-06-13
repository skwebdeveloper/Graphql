import { GraphQLServer } from "graphql-yoga";

// *!Type definitions (schema)
const typeDefs = `
 type Query{
  name: String!
  me: User!
  post: Post!
 }

type User{
  id: Int!
  title: String!
  number: Int!
  gender: String!
}

type Post{
  id: Int!
  title: String!
  body: String!
  published: Boolean!
}
`;

// *!Resolvers
const resolvers = {
  Query: {
    name() {
      return "Skwebdev";
    },
    post() {
      return {
        id: 123,
        title: "Head one",
        body: "This is my First post",
        published: true,
      };
    },
    me() {
      return {
        id: 123,
        title: "Saurabh Kumar",
        number: 123,
        gender: "Male",
      };
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
