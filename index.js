import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

// constants
const port = 4000;

// resolver
const resolvers = {
    Query: {
        games(){
            return db.games;
        },
        game(parent, args, context){
            return db.games.find((game)=> game.id === args.id)
        },
        reviews(){
            return db.reviews;
        },
        review(parent, args, context){
            return db.reviews.find((review)=> review.id === args.id);
        },
        authors(){
            return db.authors;
        },
        author(parent, args, context){
            return db.authors.find((author)=> author.id === args.id)
        }
    },
    Game: {
        reviews(parent){
            return db.reviews.filter((review)=> review.game_id === parent.id);
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter((review)=> review.game_id === parent.id);
        }
    },
    Review: {
        author(parent){
            return db.authors.find((author)=> author.id === parent.author_id)
        },
        game(parent){
            return db.games.find((game)=> game.id === parent.game_id)
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

 // nested queries

 /* 
 query GameQuery($id: ID!){
    game(id: $id){
        title,
        reviews {
            rating,
            content
        }
    }
 }
 */

// server setup
const server = new ApolloServer({
    // typeDefs - definitions of types of data
    typeDefs,
    // resolvers
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port }
})

console.log("Server ready at port:", port)