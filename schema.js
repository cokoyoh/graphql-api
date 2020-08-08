const { gql } = require('apollo-server');

module.exports = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
    ) : [Session],
    sessionById(id: ID): Session,
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}

type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "This will go away soon!")
    level: String
}

type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}
`;