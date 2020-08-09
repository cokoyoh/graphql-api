const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');


class SessionsAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getSessions(args) {
        return _.filter(sessions, args);
    }

    getSessionById(id) {
        const session = _.filter(sessions, { id: parseInt(id) });
        return session[0]
    }

    toggleFavoriteSession(id) {
        const session = _.filter(sessions, { id: parseInt(id) });
        session[0].fevorite = !session[0].fevorite;
        return session[0]
    }
}

module.exports = SessionsAPI;