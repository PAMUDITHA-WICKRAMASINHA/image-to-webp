import { Router } from "express"
import * as ImagesController from "../controllers/images.controller";
import multer from 'multer';

const routes = Router({ mergeParams: true })
const upload = multer();

const PATH = {
  MY_INFO: "/to-webp",
}

routes.route(PATH.MY_INFO).post(upload.single('image'), ImagesController.imageToWebp)

export default routes
