import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// constants
const port = 4000;

// server setup
const server = new ApolloServer({
    // typeDefs - type definitions
    // resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: {port}
})

console.log("Server ready at port:", port)