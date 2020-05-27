// Data
const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

const lookup = (login, property) => {
  const loginList = users.map(user => user.login);
  if (!loginList.includes(login)) throw new Error('Could not find user');
  if (property === 'likes') return users.find(user => user.login === login).likes;
  if (property === 'lastName') return users.find(user => user.login === login).lastName;
  throw new Error('Could not find property');
};

module.exports = lookup;