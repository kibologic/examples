import { createServer } from '@kibologic/swite';

const server = await createServer({
  root: './src',
  port: 5001,
  entry: 'main.ui',
});

await server.listen();
