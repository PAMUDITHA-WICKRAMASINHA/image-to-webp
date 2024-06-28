import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
	badRequestError,
	serverError,
  } from "../utils/utitlity";
import log from "../logger";
import path from 'path';
import * as ImagesService from "../service/images.service"

export const imageToWebp = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            return badRequestError(res, errors.array()[0].msg);
        }

        const result = await ImagesService.ConvertImageToWebp(req);
  
        if (result.error) {
            return badRequestError(res, result.message);
        }
        
        res.set('Content-Type', 'image/webp');
        return res.send(result.data);
    } catch (error) {
        log.error(`<< imageToWebp() error=${error}`);
        return serverError(res);
    }
}