const { Order, OrderItem, Product } = require('../models');

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.order_id, {
      include: [{ model: OrderItem, include: [Product] }],
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body, {
      include: [OrderItem],
    });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const [updated] = await Order.update(req.body, {
      where: { id: req.params.order_id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Order not found' });
    }
    const updatedOrder = await Order.findByPk(req.params.order_id);
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const deleted = await Order.destroy({
      where: { id: req.params.order_id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const [updated] = await Order.update(
      { status: req.body.status },
      { where: { id: req.params.order_id } }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Order not found' });
    }
    const updatedOrder = await Order.findByPk(req.params.order_id);
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

const getOrderItems = async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll({
      where: { order_id: req.params.order_id },
      include: [Product],
    });
    res.status(200).json(orderItems);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  getOrderItems,
};
