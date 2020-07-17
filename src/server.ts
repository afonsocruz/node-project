import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
});

app.listen(3838, () => {
  console.log('💚 Server stated on port 3838');
});
