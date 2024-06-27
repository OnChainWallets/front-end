// scripts/dotenv.js

const result = require('dotenv').config({ processEnv: {}, DOTENV_KEY: process.env.DOTENV_KEY });
const jsonObject = result.parsed;

const fs = require('fs');

// Formatar pares chave-valor
const envData = Object.entries(jsonObject)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

// Escrever no arquivo .env
fs.writeFileSync('.env', envData);
fs.writeFileSync('.env.production', envData);
