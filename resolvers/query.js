module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
        return dataSources.sessionsAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        try {
            return dataSources.sessionsAPI.getSessionById(id);
        } catch (error) {
            return { code: 'ERROR', message: `Cannot find session of id ${id}`, token: 'some-id-token' };
        }
    },
    speakers: (parent, args, { dataSources }, info) => {
        return dataSources.speakersAPI.getSpeakers();
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
        return dataSources.speakersAPI.getSpeakerById(id);
    }
};