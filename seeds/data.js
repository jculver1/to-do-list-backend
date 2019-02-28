
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {description: 'make to do list with Ang'},
        {description: 'snuggle with Luna'},
        {description: 'clean bathroom'}
      ]);
    });
};
