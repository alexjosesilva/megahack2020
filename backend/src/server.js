require("dotenv/config");
const sequelize = require("database/models");

const app = require("./app");

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
  });
});
