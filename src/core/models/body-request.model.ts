import { Request } from "express";

export interface BodyRequest<Tbody = any> extends Request {
    body: Tbody;
  }
  