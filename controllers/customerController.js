const { Customer } = require('../models');

const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const customer = await Customer.findByPk(req.params.customer_id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { id: req.params.customer_id },
    });
    if (!updated) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    const updatedCustomer = await Customer.findByPk(req.params.customer_id);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const deleted = await Customer.destroy({
      where: { id: req.params.customer_id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
