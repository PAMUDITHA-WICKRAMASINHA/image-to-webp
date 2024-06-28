import { Request, Response } from "express";
import log from "../logger";
import sharp from 'sharp';
import fs from 'fs';

export const ConvertImageToWebp = async (req: Request) => {
    try {
        const inputFile = req.file?.buffer; // Multer stores the file in memory as a buffer

        if (!inputFile) {
            return {
                error: true,
                message: "No file uploaded"
            };
        }
      
        const webpBuffer = await sharp(inputFile)
        .toFormat('webp')
        .toBuffer();

        return {
            error: false,
            message: "Image converted successfully",
            data: webpBuffer
        };
    } catch (error) {
        log.error(`<< ConvertImageToWebp() error=${error}`);
        return {
            error: true,
            message: "Something went wrong"
        };
    }
};