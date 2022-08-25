'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients_procedures', {
      patient_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
        ondelete: "CASCADE",
        onupdate: "CASCADE",
      },
      procedure_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "procedures",
          key: "id",
        },
        ondelete: "CASCADE",
        onupdate: "CASCADE",
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('patients_procedures');
  }
};