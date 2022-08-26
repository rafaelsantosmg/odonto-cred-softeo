import 'dotenv/config';
import api from './api';

const PORT = process.env.API_PORT || 3333;

const server = api.listen(PORT, () =>
  console.log(`Server is running on PORT: ${PORT}`)
);

export default server;
