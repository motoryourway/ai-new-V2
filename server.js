#!/usr/bin/env node

/**
 * TW2GEM AI Call Center - Main Server Entry Point
 * 
 * This is the main entry point for the TW2GEM AI Call Center system.
 * It integrates the tw2gem-server infrastructure with the management API
 * and serves the UI dashboard.
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start the API server from the server package
const serverPath = join(__dirname, 'packages', 'server', 'src', 'server.js');

console.log('🚀 Starting TW2GEM AI Call Center...');
console.log('📦 Loading server from:', serverPath);

// Import and start the server
import(serverPath).catch(error => {
    console.error('❌ Failed to start TW2GEM AI Call Center:', error);
    process.exit(1);
});