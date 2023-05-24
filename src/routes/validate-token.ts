import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];

  console.log(headerToken);
  //Validamos la cabecera
  if (headerToken != undefined && headerToken.startsWith("Bearer")) {
    //Validamos que tenga el token
    try {
      const bearerToken = headerToken.slice(7);

      //Validamos que el token sea válido
      jwt.verify(bearerToken, process.env.SECRET_KEY || "admin123");
      console.log(bearerToken);
      next();
    } catch (error) {
      res.status(401).json({
        message: "No tienes permisos para acceder a esta ruta",
      });
    }
  } else {
    res.status(401).json({
      message: "Acceso denegado",
    });
  }
};

export default validateToken;
