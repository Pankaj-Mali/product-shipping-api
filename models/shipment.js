module.exports = (sequelize, DataTypes) => {
  const Shipment = sequelize.define('Shipment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    shipment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM('Shipped', 'In Transit', 'Delivered', 'Returned'),
      allowNull: false,
    },
  });

  return Shipment;
};
