const { ApolloServer } = require('apollo-server');

const server = new ApolloServer();

server
    .listen({ port: process.env.PORT || 400 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })