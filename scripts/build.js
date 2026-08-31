const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
fs.mkdirSync(dist, { recursive: true });
function minCss(s){return s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{}:;,>+])\s*/g,'$1').replace(/;}/g,'}').trim()}
function minJs(s){return s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').trim()}
const css=fs.readFileSync(path.join(src,'mbrutals.css'),'utf8');
const js=fs.readFileSync(path.join(src,'mbrutals.js'),'utf8');
fs.writeFileSync(path.join(dist,'mbrutals.css'),css);
fs.writeFileSync(path.join(dist,'mbrutals.js'),js);
fs.writeFileSync(path.join(dist,'mbrutals.min.css'),minCss(css));
fs.writeFileSync(path.join(dist,'mbrutals.min.js'),minJs(js));
console.log('MBrutals 1.5.5 built successfully.');
