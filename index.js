import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db";

// types
import { typeDefs } from "./schema";

// constants
const port = 4000;

// resolver
const resolvers = {
    Query: {
        games(){
            return db.games;
        }
    }
}

/*
 query for games will look something like this
 games {
    title
 }

 in the resolver we are returning the whole games array.
 but graphQL is doing it's magic, by sending array of items with only the requested items from the frontend
 */

// server setup
const server = new ApolloServer({
    // typeDefs - definitions of types of data
    typeDefs
    // resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port }
})

console.log("Server ready at port:", port)