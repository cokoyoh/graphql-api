const { ApolloError } = require('apollo-server');

module.exports = {
    internalServerError(error) {
        if (error.extensions.code == 'INTERNAL_SERVER_ERROR') {
            return new ApolloError(
                "We are experiencing some errors on our end",
                "ERROR",
                {
                    token: "unique_token"
                }
            )
        }
    }
}