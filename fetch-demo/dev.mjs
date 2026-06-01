import { createServer } from '@kibologic/swite';

const server = await createServer({
  root: './src',
  port: 5003,
  entry: 'main.ui',
});

await server.listen();
