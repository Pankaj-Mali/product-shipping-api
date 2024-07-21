module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Supplier;
};
