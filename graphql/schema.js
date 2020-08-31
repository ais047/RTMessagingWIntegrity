const typeDefs = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    yubiKeyId: String
    password: String
  }
  type Message {
    id: ID!
    message: String
    createdAt: Int
    creator: User
  }
  type Thread {
    id: ID!
    messages: [Message]
    createdAt: Int
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
    allMessagesInThread: [Message]
    allThreads: [Thread]
  }
  type Mutation {
    addUser(firstName: String, lastName: String, yubiKeyId: String, password: String): User
  }
`;

module.exports = typeDefs