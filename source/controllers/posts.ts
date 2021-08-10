import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
var fs = require('fs');

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

//Posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    let data = JSON.stringify(result.data, null, 2);
    let metodo = JSON.stringify(result.config.method);
    let fecha = JSON.stringify(result.headers.date)
    fs.appendFile('registroPeticion.json', "{\"fecha\": " + fecha + ",\"metodo\": " + metodo + ",\"data\": " + data + "}", (err: any) => {
        if (err) throw err;
    });
    if (result.data != "") {
        return res.status(200).json({
            message: posts
        });
    }
    else {
        return res.status(200).json({
            "Error": "No hay datos"
        });
    }
};

//Single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: string = req.params.id;
        let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let post: Post = result.data;
        let data = JSON.stringify(result.data, null, 2);
        let metodo = JSON.stringify(result.config.method);
        let fecha = JSON.stringify(result.headers.date)
        fs.appendFile('registroPeticion.json', "{\"fecha\": " + fecha + ",\"metodo\": " + metodo + ",\"data\": " + data + "}", (err: any) => {
            if (err) throw err;
        });
        return res.status(200).json({
            message: post
        });
    } catch (error) {
        return res.status(200).json({
            "Error": "No hay datos"
        });
    }
};

export default { getPosts, getPost };