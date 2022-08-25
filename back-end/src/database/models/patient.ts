import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Patient extends Model {
  public id!: number;
  public name!: string;
  public phoneNumber!: number;
  public cpf!: number;
}

Patient.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: INTEGER,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'patients',
    timestamps: false,
    underscored: true,
  }
);

export default Patient;
