const gql = require("graphql-tag");

module.exports = gql`
  type Booking {
    id: ID!
    artistId: String!
    name: String!
    email: String!
    date: String!
    bodyArea: String!
    description: String
  }

  type User {
    id: ID!
    email: String!
    name: String
    bio: String
    styles: [String]
  }

  type Query {
    getBookings(artistId: String!): [Booking]
    getUsers: [User]
  }

  type Mutation {
    createBooking(
      artistId: String!
      name: String!
      email: String!
      date: String!
      bodyArea: String!
      description: String
    ): Booking
  }
`;
