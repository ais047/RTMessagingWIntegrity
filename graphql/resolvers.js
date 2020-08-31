const { Users } = require('../database');

const createUser = async (input) => {
  const res = await Users.create(input);
  return res
};
// createUser({firstName: 'John'})

const getAllUsers = async () => {
  const res = await Users.findAll({
    raw: true
  });
  return res
}

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
    }
  },
};

module.exports = resolvers