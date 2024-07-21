const express = require('express');
const router = express.Router();
const {
  getAllShipments,
  getShipmentById,
  createShipment,
  updateShipment,
  deleteShipment,
} = require('../controllers/shipmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getAllShipments);
router.get('/:shipment_id', getShipmentById);
router.post('/', createShipment);
router.put('/:shipment_id', updateShipment);
router.delete('/:shipment_id', deleteShipment);

module.exports = router;
