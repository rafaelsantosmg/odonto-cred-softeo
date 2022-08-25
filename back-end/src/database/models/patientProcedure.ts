import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Patient from './patient';
import Procedure from './procedure';

class PatientProcedure extends Model {
  public patientId!: number;
  public procedureId!: string;
}

PatientProcedure.init(
  {
    patientId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    procedureId: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize: db,
    modelName: 'patients_procedures',
    timestamps: false,
    underscored: true,
  }
);

Patient.belongsToMany(Procedure, { through: 'patients_procedures' });
Procedure.belongsToMany(Patient, { through: 'patients_procedures' });

export default PatientProcedure;
