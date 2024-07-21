const express = require('express');
const router = express.Router();
const {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllCustomers);
router.get('/:customer_id', getCustomerById);
router.post('/', createCustomer);
router.put('/:customer_id', updateCustomer);
router.delete('/:customer_id', deleteCustomer);

module.exports = router;

