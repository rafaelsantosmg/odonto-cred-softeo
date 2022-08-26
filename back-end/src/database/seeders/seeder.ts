import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Erika',
          email: 'erika@odontocred.com.br',
          password:
            '$2a$10$Z/RlmiIf3O8zeBWJ7c0Pv.8oWh.CGWplRgXBxmnvNabUbhONTp3YS', // --@65erika@99--
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
