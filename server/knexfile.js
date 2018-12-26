// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'db',
      user : 'root',
      password : '123',
      database : 'sgtimes'
    },
    seeds: {
      directory: './seeds'
    }
  },

};
