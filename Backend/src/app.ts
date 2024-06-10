import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sowRoutes from './routes/sowRoutes';
import invoiceRoutes from './routes/invoiceRoutes';
import organizationRoutes from './routes/organizationRoutes';
import customerRoutes from './routes/customerRoutes';
import paymentPlanRoutes from './routes/paymentPlanRoutes';
import paymentPlanItemRoutes from './routes/paymentPlanItemRoutes'; // Add this line
import { sequelize } from './postgresDB/pgConfig';
import './postgresDB/association';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use('/api/sows', sowRoutes); 

app.use('/api/organizations', organizationRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/payment-plans', paymentPlanRoutes);
app.use('/api/payment-plan-item', paymentPlanItemRoutes); 
app.use('/api/invoices',invoiceRoutes)

app.get('/', (req, res) => {
  res.send('Invoice Management System API');
});

sequelize.authenticate().then(() => {
  console.log('Connected to the database.');
}).catch((err: any) => {
  console.error('Unable to connect to the database:', err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
