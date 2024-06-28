import { Router } from "express"
import ImagesRoutes from "./images.routes"

const routes = Router()

const PATH = {
  ROOT: "/",
  IMAGES: "/images",
}

routes.use(PATH.IMAGES, ImagesRoutes);

export default routes
