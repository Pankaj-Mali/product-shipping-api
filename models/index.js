const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Customer = require('./customer')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const OrderItem = require('./orderItem')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);
const Shipment = require('./shipment')(sequelize, DataTypes);
const Supplier = require('./supplier')(sequelize, DataTypes);

// Associations
Supplier.hasMany(Product, { foreignKey: 'supplier_id' });
Product.belongsTo(Supplier, { foreignKey: 'supplier_id' });

Customer.hasMany(Order, { foreignKey: 'customer_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

Order.hasOne(Shipment, { foreignKey: 'order_id' });
Shipment.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = {
  sequelize,
  Customer,
  Order,
  OrderItem,
  Product,
  Shipment,
  Supplier,
};
