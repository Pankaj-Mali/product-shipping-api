// controllers/shipmentController.js
const { Shipment } = require('../models');

const getAllShipments = async (req, res, next) => {
  try {
    const shipments = await Shipment.findAll();
    res.status(200).json(shipments);
  } catch (error) {
    next(error);
  }
};

const getShipmentById = async (req, res, next) => {
  try {
    const shipment = await Shipment.findByPk(req.params.shipment_id);
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }
    res.status(200).json(shipment);
  } catch (error) {
    next(error);
  }
};

const createShipment = async (req, res, next) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.status(201).json(shipment);
  } catch (error) {
    next(error);
  }
};

const updateShipment = async (req, res, next) => {
  try {
    const [updated] = await Shipment.update(req.body, {
      where: { id: req.params.shipment_id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Shipment not found' });
    }
    const updatedShipment = await Shipment.findByPk(req.params.shipment_id);
    res.status(200).json(updatedShipment);
  } catch (error) {
    next(error);
  }
};

const deleteShipment = async (req, res, next) => {
  try {
    const deleted = await Shipment.destroy({
      where: { id: req.params.shipment_id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Shipment not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllShipments,
  getShipmentById,
  createShipment,
  updateShipment,
  deleteShipment,
};
