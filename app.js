const express = require('express');
const passport = require('passport');
const cors = require('cors');
const { sequelize } = require('./models');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/shipments', require('./routes/shipmentRoutes'));
app.use('/api/suppliers', require('./routes/supplierRoutes'));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
