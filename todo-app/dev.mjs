import { createServer } from '@swissjs/swite';

const server = await createServer({
  root: './src',
  port: 5002,
  entry: 'main.ui',
});

await server.listen();
