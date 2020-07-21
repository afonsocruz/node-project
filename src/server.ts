import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3838, () => {
  console.log('💚 Server stated on port 3838');
});
