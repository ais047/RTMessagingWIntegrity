const typeDefs = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    yubiKeyId: String
    password: String
  }
  type Book {
    id: ID!
    title: String
    author: Author
    cover(type: CoverType): String
  }
  type Author {
    id: ID!
    name: String
  }
  enum CoverType {
      HARDCOVER
      SOFTCOVER
  }
  type Query {
    allBooks: [Book]
    getBook(id: ID!): Book
    allUsers: [User]
  }
`;

module.exports = typeDefs