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
    res.sendFile(path.join(__dirname, '../assets/data/data.json'));
});

//ruta agregar recibe y agrega a la lista de datos el
routers.get('/agregar', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/data/data.json')));
    const { nombre, precio } = req.query;
    data.deportes.push({ nombre, precio });
    fs.writeFileSync(path.join(path.join(__dirname, '../assets/data/data.json'), JSON.stringify({ data })));

});

//ruta editar, permite cambiar el valor del precio
routers.get("/editar", (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/data/data.json')));
    const { nombre, precio } = req.query;
    data.deportes.forEach((d) => {
        if (d.nombre === nombre) {
            d.precio = precio
        }
    });
    fs.writeFileSync(path.join(__dirname, '../assets/data/data.json'), JSON.stringify({ data }));       
});

//ruta eliminar elimina el deporte de la lista
routers.get("/eliminar", (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/data/data.json')));
    const { nombre } = req.query;
    data.deportes = data.deportes.filter((d) => d.nombre !== nombre);
    fs.writeFileSync(path.join(__dirname, '../assets/data/data.json'), JSON.stringify({ data }));
});
export default routers;