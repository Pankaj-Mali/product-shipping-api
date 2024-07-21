const express = require('express');
const router = express.Router();
const {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/supplierController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllSuppliers);
router.get('/:supplier_id', getSupplierById);
router.post('/', createSupplier);
router.put('/:supplier_id', updateSupplier);
router.delete('/:supplier_id', deleteSupplier);

module.exports = router;
