const _ = require('lodash');

module.exports = {
    Query: {
        sessions: (parent, args, { dataSources }, info)  => {
            return dataSources.sessionsAPI.getSessions(args);
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionsAPI.getSessionById(id);
        },
        speakers: (parent, args, { dataSources }, info)  => {
            return dataSources.speakersAPI.getSpeakers();
        },
        speakerById: (parent, { id }, { dataSources }, info) => {
            return dataSources.speakersAPI.getSpeakerById(id);
        }
    },

    Session: {
        async speakers(session, args, { dataSources }, info) {
            const speakers = await dataSources.speakersAPI.getSpeakers();
            const returns = speakers.filter((speaker) => {
                return _.filter(session.speakers, { id: speaker.id }).length > 0;
            })

            return returns;  
        }
    }
};