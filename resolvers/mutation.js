module.exports = {
    toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionsAPI.toggleFavoriteSession(id);
    },
}