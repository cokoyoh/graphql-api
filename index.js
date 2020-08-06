const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    sessions: [Session]
}

type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
}`;

const server = new ApolloServer({ typeDefs });

server
    .listen({ port: process.env.PORT || 400 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })