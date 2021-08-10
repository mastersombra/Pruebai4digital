import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
var fs = require('fs');

interface Users {
    id: Number;
}

//Users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let users: [Users] = result.data;
    let data = JSON.stringify(result.data, null, 2);
    let metodo = JSON.stringify(result.config.method);
    let fecha = JSON.stringify(result.headers.date)
    fs.appendFile('registroPeticion.json', "{\"fecha\": " + fecha + ",\"metodo\": " + metodo + ",\"data\": " + data + "}", (err: any) => {
        if (err) throw err;
    });
    return res.status(200).json({
        message: users
    });
};

//Single user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: string = req.params.id;
        let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user: Users = result.data;
        let data = JSON.stringify(result.data, null, 2);
        let metodo = JSON.stringify(result.config.method);
        let fecha = JSON.stringify(result.headers.date)
        fs.appendFile('registroPeticion.json', "{\"fecha\": " + fecha + ",\"metodo\": " + metodo + ",\"data\": " + data + "}", (err: any) => {
            if (err) throw err;
        });
        return res.status(200).json({
            message: user
        });
    } catch (error) {
        return res.status(200).json({
            "Error": "No hay datos"
        });
    }
};

export default { getUsers, getUser };