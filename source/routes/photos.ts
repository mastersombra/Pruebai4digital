import express from 'express';
import controller from '../controllers/photos';
const router = express.Router();

router.get('/users/:id/photos', controller.getPhotos);

export = router;