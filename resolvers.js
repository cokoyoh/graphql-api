const Query = require('./resolvers/qu ery');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation');

module.exports = {
    Query,
    Session,
    Mutation,
    SessionOrError: {
        __resolveType({ code }) {
            if (code) {
                return "Error"
            }
            return "Session"
        }
    }
};