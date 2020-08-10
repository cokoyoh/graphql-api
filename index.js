const { ApolloServer } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');
const SpeakersAPI = require('./datasources/speakers');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const { errors } = require('./errors/internal-server-error');

const dataSources = () => ({
    sessionsAPI: new SessionsAPI(),
    speakersAPI: new SpeakersAPI()
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    debug: false,
    formatError: (error) => {
        errors.internalServerError(error);
    }
});

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })