const path = require("node:path");
const { compileStrapi, createStrapi } = require("@strapi/strapi");
const fs = require("node:fs");

let instance;

async function setupStrapi() {
  if (!instance) {
    const appContext = await compileStrapi();
    instance = await createStrapi(appContext).load();
    await instance.server.mount();
  }
  return instance;
}

async function cleanupStrapi() {
  if (!instance) {
    return;
  }

  const tmpDbFile = path.join(process.cwd(), process.env.DATABASE_FILENAME || ".tmp/data.db");

  await instance.destroy();

  // delete test database after all tests have completed
  if (fs.existsSync(tmpDbFile)) {
    fs.unlinkSync(tmpDbFile);
  }

  instance = null;
}

module.exports = { setupStrapi, cleanupStrapi };
