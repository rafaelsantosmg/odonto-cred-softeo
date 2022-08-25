'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
        ondelete: "CASCADE",
        onupdate: "CASCADE",
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount_installment: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('payments');
  }
};