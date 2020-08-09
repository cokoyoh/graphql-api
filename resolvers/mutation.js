module.exports = {
    toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionsAPI.toggleFavoriteSession(id);
    },

    addNewSession: (parent, { session }, { dataSources }, info) => {
        return dataSources.sessionsAPI.addNewSession(session);
    }
}