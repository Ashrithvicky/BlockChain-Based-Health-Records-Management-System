module.exports = (sequelize, DataTypes) => {
    return sequelize.define("patient", {
      hhNumber: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      gender: DataTypes.STRING,
      bloodGroup: DataTypes.STRING,
      homeAddress: DataTypes.STRING,
      email: DataTypes.STRING
    });
  };
  