#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Moving build directory to dist...');

const buildDir = path.join(__dirname, '..', 'build');
const distDir = path.join(__dirname, '..', 'dist');

if (fs.existsSync(buildDir)) {
  // Remove dist if it exists
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  
  // Copy build to dist
  copyDir(buildDir, distDir);
  console.log('Successfully created dist directory from build');
} else {
  console.error('Build directory not found!');
  process.exit(1);
}
