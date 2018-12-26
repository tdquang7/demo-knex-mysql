exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: '123'},
        {username: 'tdquang', password: '123'}
      ]);
    });
};