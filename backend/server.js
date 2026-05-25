import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serviceRoutes from './routes/serviceRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Takala Typing M.P. Online Service Center API',
    status: 'running',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'takala-typing-api' });
});

app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Takala Typing backend running on port ${PORT}`);
});
