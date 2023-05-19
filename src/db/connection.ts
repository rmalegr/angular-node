import { Sequelize } from "sequelize";

const sequelize = new Sequelize("rrhh", "root", "9484", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
