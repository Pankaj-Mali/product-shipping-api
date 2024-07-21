const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllProducts);
router.get('/:product_id', getProductById);
router.post('/', createProduct);
router.put('/:product_id', updateProduct);
router.delete('/:product_id', deleteProduct);

module.exports = router;
