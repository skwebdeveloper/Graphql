import { GraphQLServer } from "graphql-yoga";

const posts = [
  {
    id: 1,
    title: "Saurabh",
    number: 1232141,
    published: "Yes",
  },
  {
    id: 2,
    title: "Hut",
    number: 1232141,
    published: "Yes",
  },
  {
    id: 3,
    title: "Joker",
    number: 1232141,
    published: "Yes",
  },
];

// *!Type definitions (schema)
const typeDefs = `
 type Query{
  posts(query: String): [Post]!
 }
type Post{
  id: Int!
  title: String!
  number: Int!
  published: String!
}

`;
// *!Resolvers
const resolvers = {
  Query: {
    posts(parent, args, info, ctx) {
      if (!args.query) {
        return posts;
      } else {
        return posts.filter((poster) => {
          return poster.published
            .toLowerCase()
            .includes(args.query.toLowerCase());
        });
      }
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
