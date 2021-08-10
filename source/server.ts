import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/users';
import routes1 from './routes/posts';
import routes2 from './routes/photos';
var fs = require('fs')
var path = require('path')

const router: Express = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'morgan.log'), { flags: 'a' })


router.use(morgan('dev', { stream: accessLogStream }));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

router.use('/', routes);
router.use('/', routes1);
router.use('/', routes2);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));