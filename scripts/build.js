const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

fs.mkdirSync(dist, { recursive: true });

const css = fs.readFileSync(path.join(src, 'mbrutals.css'), 'utf8');
const js = fs.readFileSync(path.join(src, 'mbrutals.js'), 'utf8');

const minCss = css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}:;,>])\s*/g, '$1')
  .trim();

const minJs = js
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}();,:])\s*/g, '$1')
  .trim();

fs.writeFileSync(path.join(dist, 'mbrutals.css'), css);
fs.writeFileSync(path.join(dist, 'mbrutals.min.css'), minCss);
fs.writeFileSync(path.join(dist, 'mbrutals.js'), js);
fs.writeFileSync(path.join(dist, 'mbrutals.min.js'), minJs);

console.log('MBrutals 1.2.0 built successfully.');
