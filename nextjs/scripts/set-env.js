#!/usr/bin/env node

const fs = require("fs");

const environments = ["development", "staging", "production"];
const envArg = process.argv[2];

if (!envArg || !environments.includes(envArg)) {
  console.error("❌ Please specify a valid environment: development, staging, or production");
  console.info("Usage: node scripts/set-env.js <environment>");
  process.exit(1);
}

const envFile = `.env.${envArg}`;

try {
  if (fs.existsSync(envFile)) {
    fs.copyFileSync(envFile, localFile);
    console.info(`✅ Environment set to ${envArg}`);
  } else {
    console.error(`❌ Environment file ${envFile} not found`);
    process.exit(1);
  }
} catch (error) {
  console.error(`❌ Error setting environment: ${error.message}`);
  process.exit(1);
}
