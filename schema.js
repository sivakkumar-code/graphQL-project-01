export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query{
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
    games: [Game]
    game(id: ID!): Game
}
type Mutation{
    deleteGame(id: ID!): [Game]
    addGame(game: AddGameInput!): Game
}
input AddGameInput {
    title: String!
    platform: [String!]!
}
`;

// most used data types in graph ql
// int, float, string, boolean, ID