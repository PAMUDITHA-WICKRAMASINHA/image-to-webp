import { Request, Response } from "express";
import { constants as ERROR_CONST } from "../constants/error"
import HTTPStatus from "http-status"

interface errorObject {
    message: string
  }
  
interface errorResponseJson {
    error: errorObject
}

export const serverError = (res: Response) => {
    let code: number, response: errorResponseJson
    const data: errorObject = {
      message: ERROR_CONST.ERROR_500_MESSAGE,
    }
    code = HTTPStatus.INTERNAL_SERVER_ERROR
    response = createErrorResponseJSON(data)
    return sendJSONResponse(res, code, response)
}

  
export const badRequestError = (res: Response, errors: string) => {
    let code: number, response: errorResponseJson
    const data = { message: errors }
    code = HTTPStatus.BAD_REQUEST
    response = createErrorResponseJSON(data)
    return sendJSONResponse(res, code, response)
}

export const createErrorResponseJSON = (error: errorObject) => {
    const errorResponse = { error }
    return errorResponse
}

export const sendJSONResponse = (
    res: Response,
    statusCode: number,
    data: errorResponseJson
  ) => {
    res.status(statusCode).json(data)
  }