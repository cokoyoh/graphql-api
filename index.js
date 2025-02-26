const { ApolloServer, ApolloError } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');
const SpeakersAPI = require('./datasources/speakers');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

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
        if (error.extensions.code == 'INTERNAL_SERVER_ERROR') {
            return new ApolloError(
                "We are experiencing some errors on our end", "ERROR", {
                    token: "unique_token"
                }
            )
        }
        return error;
    }
});

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })