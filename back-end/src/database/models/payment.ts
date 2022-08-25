import { Model, INTEGER, STRING, REAL, BOOLEAN, DATEONLY, NOW } from 'sequelize';
import db from '.';
import Patient from './patient';

class Payment extends Model {
  public id!: number;
  public patientId!: number;
  public payment_method!: string;
  public amount_installment!: number;
  public status!: boolean;
  public date!: Date;
}

Payment.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    patientId: {
      type: INTEGER,
    },
    payment_method: {
      type: STRING(10),
      allowNull: false,
    },
    amount_installment: {
      type: INTEGER,
      allowNull: false,
    },
    status: {
      type: BOOLEAN,
      allowNull: false,
    },
    date: {
      type: DATEONLY,
      defaultValue: NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'payments',
    timestamps: false,
    underscored: true,
  }
);

Payment.belongsTo(Patient, { foreignKey: 'patientId', as: 'patientId' });

Patient.hasMany(Payment, { foreignKey: 'patientId', as: 'patientId' });

export default Payment;