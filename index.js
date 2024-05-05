import express from 'express';
import fs from 'fs';
const app=express();
const port = process.env.PORT || 3000;

//ruta estatica
app.use(express.static('assets'));

//rutas
app.get('/', (req, res) => res.sendFile( path.join(__dirname,'views/index.html')));

app.listen(port, console.log(`Example app listening on port http://localhost:${port}`));