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
    sessionById(id: ID): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}

input SessionInput {
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String,
    fevorite: Boolean
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
    level: String,
    fevorite: Boolean
    speakers: [Speaker]
}

type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}

type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
}

union SessionOrError = Session | Error

type Error {
    code: String
    message: String
    token: String
}
`;