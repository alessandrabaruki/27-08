import express from 'express';
import todoRoutes from './routes/todos';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', todoRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Todo!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
