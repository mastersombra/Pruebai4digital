import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
var fs = require('fs');

interface Albums {
    id: Number;
}

//Albums
const getPhotos = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);

    let arregloAlbums: number[] = [];
    let arregloFotos: number[] = [];
    for (let i = 0; i < 100; i++) {
        try {
            arregloAlbums[i] = result.data[i].id;
        } catch (error) { }

    }
    for (let i = 0; i < arregloAlbums.length; i++) {
        let result2: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums/${arregloAlbums[i]}/photos`);
        arregloFotos[i] = result2.data;
    }
    if (result.data != "") {
        let data = JSON.stringify(result.data, null, 2);
        let metodo = JSON.stringify(result.config.method);
        let fecha = JSON.stringify(result.headers.date)
        fs.appendFile('registroPeticion.json', "{\"fecha\": " + fecha + ",\"metodo\": " + metodo + ",\"data\": " + data + "}", (err: any) => {
            if (err) throw err;
        });
        return res.status(200).json({
            message: arregloFotos
        });
    }
    else {
        return res.status(200).json({
            "Error": "No hay datos"
        });
    }
};

export default { getPhotos };