import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import util from 'util';

let config = '';
let filename = path.resolve(__dirname, 'config/index.yml');

try {
  config = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
} catch (e) {
  console.error('Error cant read yaml file', e);
}

export default config;
