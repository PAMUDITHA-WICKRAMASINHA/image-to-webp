import express, { Request, Response, NextFunction } from 'express';
import apiRoutes from "./routes/index"
import morgan from 'morgan';

const PATH = {
  API: "/api"
}

const app = express();
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use(PATH.API, apiRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
