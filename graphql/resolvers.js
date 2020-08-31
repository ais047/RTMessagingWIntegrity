const { Users, Messages, Threads } = require('../database');

const createUser = async (input) => {
  const res = await Users.create(input);
  return res.get()
};

const getAllUsers = async () => {
  const res = await Users.findAll({
    raw: true
  });
  return res
}

const getAllMessagesInThread = async (threadId) => {
  const res = await Users.findAll({
    where: {
      id: threadId
    },
    raw: true
  });
  return res
}

// Sample Seed
const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      name: 'J.K. Rowling'
    }
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: {
      name: 'Michael Crichton'
    }
  },
];


const resolvers = {
  Query: {
    allUsers: () => getAllUsers(),
    allBooks: () => books,
    getBook (parent, args, context, info) {
      console.log(args)
      return books.find(book => book.id == args.id)
    },
    allMessagesInThread: (parent, args, context, info) => {
      getAllMessagesInThread(args.id)
    },
    allThreads: () => getAllThreads()
  },
  Mutation: {
    addUser: async (parent, args, context, info) => {
      console.log(args)
      return await createUser(args)
    }
  }
};

module.exports = resolvers