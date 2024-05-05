import express from 'express';
import fs from 'fs';
import path from 'path';
const routers = express.Router();
const __dirname = import.meta.dirname;

routers.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

export default routers;