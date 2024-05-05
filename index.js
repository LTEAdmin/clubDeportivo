import express from 'express';
import routers from './routers/router.js';
import fs from 'fs';
const app=express();
const port = process.env.PORT || 3000;

//ruta estatica
app.use(express.static('assets'));

//rutas
app.use('/', routers);

app.listen(port, console.log(`Example app listening on port http://localhost:${port}`));