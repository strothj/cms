import express from 'express';

const app = express();

function test() {
  return Promise.resolve('I am a server route and can also be hot reloaded!');
}

app.get('/api', async (req, res) => {
  res.send({
    message: await test(),
  });
});

export default app;
