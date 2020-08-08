const { ApolloServer, gql } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');

const typeDefs = gql`
type Query {
    sessions: [Session],
    sessionById(id: ID): Session
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
    track: String @deprecated(reason: "This will go away soon!")
    level: String
}`;

const resolvers = {
    Query: {
        sessions: (parent, args, { dataSources }, info)  => {
            return dataSources.sessionsAPI.getSessions();
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionsAPI.getSessionById(id);
        }
    }
};

const dataSources = () => ({
    sessionsAPI: new SessionsAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })