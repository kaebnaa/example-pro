#!/usr/bin/env node

/**
 * Utility script to generate a secure JWT secret
 * Usage: npm run generate-secret
 */

import crypto from 'crypto';

// Generate a 64-byte (512-bit) random hex string
const secret = crypto.randomBytes(64).toString('hex');

console.log('\n🔐 Generated JWT Secret:');
console.log('='.repeat(80));
console.log(secret);
console.log('='.repeat(80));
console.log('\n📝 Add this to your .env file:');
console.log(`JWT_SECRET=${secret}\n`);

