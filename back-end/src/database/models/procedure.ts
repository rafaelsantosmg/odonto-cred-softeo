import { Model, INTEGER, STRING, REAL } from 'sequelize';
import db from '.';

class Procedure extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: number;
}

Procedure.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING(60),
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: REAL(7, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'procedures',
    timestamps: false,
  }
);

export default Procedure;