const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Debora dos Santos Araujo',
        email: 'debora@email.com',
        password_hash: await bcryptjs.hash('tigre225', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Andreia Tamires de Souza',
        email: 'andreia@hotmail.com',
        password_hash: await bcryptjs.hash('tigre225', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
