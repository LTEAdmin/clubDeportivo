import express from 'express';
import fs from 'fs';
import path from 'path';
const routers = express.Router();
const __dirname = import.meta.dirname;

//ruta raiz despliega la vista html
routers.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

//ruta deportes lee y deslpiega en formato texto los deportes
routers.get('/deportes', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/data/data.json')));
    res.send(data.deportes);
});

//ruta agregar recibe y agrega a la lista de datos el
routers.get('/agregar', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/data/data.json')));
    const { nombre, precio } = req.body;
    data.deportes.push({ nombre, precio });
    fs.writeFileSync(path.join(__dirname, '../assets/data/data.json'), JSON.stringify(data));
    res.send('ok');
});

export default routers;