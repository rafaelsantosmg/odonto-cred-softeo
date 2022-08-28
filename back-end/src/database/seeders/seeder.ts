import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Erika',
          email: 'erika@odontolab.com.br',
          password:
            '$2a$10$YWK4y3zhtTAxSr/ngGii.uUSfUCi0LawTKGnKnCD/OzRdHIwxHgu.', // 123456
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
