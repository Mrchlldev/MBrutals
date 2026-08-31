const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const src=path.join(root,'src');
const dist=path.join(root,'dist');
fs.mkdirSync(dist,{recursive:true});
const minifyCss=s=>s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{}:;,>+])\s*/g,'$1').replace(/;}/g,'}').trim();
const minifyJs=s=>s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\/\/[^\n\r]*/g,'').replace(/\s+/g,' ').replace(/\s*([{};,])\s*/g,'$1').trim();
for(const name of ['mbrutals.css','mbrutals.js']){
  const content=fs.readFileSync(path.join(src,name),'utf8');
  fs.writeFileSync(path.join(dist,name),content);
  const min=name.endsWith('.css')?minifyCss(content):minifyJs(content);
  fs.writeFileSync(path.join(dist,name.replace(/\.(css|js)$/,'.min.$1')),min);
}
console.log('MBrutals 1.3.0 build complete.');
