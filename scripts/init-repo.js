const fs = require('fs-extra');
const path = require('path');

// relative path from repository root.
const removeFiles = [
  '.git',
  '.clasp.json',
  '.clasp.test.json',
  '.clasprc.json.enc',
  'backend/gas-test.json',
  'backend/gas-test-credentials.json.enc'
];

const paths = removeFiles.map(file => path.join(__dirname, '..', file));
Promise.all(paths.map(file => {
  console.log(`Deleting ${file}`)
  return fs.remove(file)
}));
