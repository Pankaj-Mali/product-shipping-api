const { Supplier, Product } = require('../models');

const getAllSuppliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
  }
};

const getSupplierById = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.supplier_id, {
      include: [Product],
    });
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
};

const createSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const [updated] = await Supplier.update(req.body, {
      where: { id: req.params.supplier_id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    const updatedSupplier = await Supplier.findByPk(req.params.supplier_id);
    res.status(200).json(updatedSupplier);
  } catch (error) {
    next(error);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const deleted = await Supplier.destroy({
      where: { id: req.params.supplier_id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
