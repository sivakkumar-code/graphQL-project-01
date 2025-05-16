export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}
type Query{
    reviews: [Review]
    authors: [Author]
    games: [Game]
}
`;

// most used data types in graph ql
// int, float, string, boolean, ID