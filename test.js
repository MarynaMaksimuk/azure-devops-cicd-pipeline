const { describe, it } = require('node:test');
const assert = require('node:assert');
const app = require('./index');

describe('App', () => {
  // Verify the app exports a function (Express apps are functions)
  it('should export an Express app', () => {
    assert.strictEqual(typeof app, 'function');
  });

  // Verify the server responds correctly on GET /
  it('should have a GET / route', async () => {
    const server = app.listen(0);
    const port = server.address().port;

    try {
      const response = await fetch(`http://localhost:${port}/`);
      const text = await response.text();
      assert.strictEqual(response.status, 200);
      assert.strictEqual(text, 'Hello from Azure Pipelines v2!');
    } finally {
      server.close();
    }
  });
});