import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';


const server = express();

server.use(express.json());

server.use('/categories', categoriesRoutes)

server.listen(3333,() => {
  console.log('Server started on port 3333');
});
