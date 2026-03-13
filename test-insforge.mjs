import { createClient } from '@insforge/sdk';

const insforge = createClient({
  baseUrl: 'https://q25dxwj8.ap-southeast.insforge.app',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzODQwNzh9.90dJ2XsT5NcnomN-eXhjHCLsq6HnYXkNmN7ANS4rJk8'
});

async function run() {
  console.log('Connecting...');
  await insforge.realtime.connect();
  console.log('Connected!');
  const sub = await insforge.realtime.subscribe('test');
  console.log('Subscribed!');
  process.exit(0);
}
run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
