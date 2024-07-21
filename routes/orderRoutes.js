const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  getOrderItems,
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllOrders);
router.get('/:order_id', getOrderById);
router.post('/', createOrder);
router.put('/:order_id', updateOrder);
router.delete('/:order_id', deleteOrder);
router.patch('/:order_id/status', updateOrderStatus);
router.get('/:order_id/items', getOrderItems);

module.exports = router;
