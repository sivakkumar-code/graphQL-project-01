import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

// constants
const port = 4000;

// server setup
const server = new ApolloServer({
    // typeDefs - definitions of types of data
    typeDefs
    // resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: {port}
})

console.log("Server ready at port:", port)