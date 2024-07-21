module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Suppliers',
        key: 'id',
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Product;
};
