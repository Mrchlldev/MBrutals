const express=require("express");
const path=require("path");
const {fileURLToPath}=require("url");
const app=express();
const root=__dirname;
app.use(express.static(root));

app.use('/mbrutals.css', express.static(path.join(root, 'dist/mbrutals.css')));
app.use('/mbrutals.js', express.static(path.join(root, 'dist/mbrutals.js')));
app.use('/docs.css', express.static(path.join(root, 'docs/docs.css')));
app.use('/docs.js', express.static(path.join(root, 'docs/docs.js')));

app.get('/',(_,res)=>res.sendFile(path.join(root,'index.html')));
app.get('/docs',(_,res)=>res.sendFile(path.join(root,'docs/docs.html')));
app.get('/docs/installation',(_,res)=>res.sendFile(path.join(root,'docs/installation.html')));

const components={
  buttons:'buttons',cards:'cards',forms:'forms',modals:'modals',toast:'toast',sidebar:'sidebar',
  navbar:'navbar',dropdowns:'dropdowns',tabs:'tabs',accordion:'accordion',alerts:'alerts',badges:'badges',
  progress:'progress',avatars:'avatars',pagination:'pagination',breadcrumbs:'breadcrumbs',tooltips:'tooltips',
  loading:'loading',tables:'tables',divider:'divider',utilities:'utilities'
};
app.get('/components/:name',(req,res)=>{
  const file=components[req.params.name];
  if(!file)return res.status(404).send('Component not found');
  res.sendFile(path.join(root,'docs/components',file+'.html'));
});

const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`MBrutals docs running on http://localhost:${port}`));