import { Request,Response } from "express";

export const home = (req:Request, res:Response)=>{
    res.render("pages/page", {
      banner: {
        title: "Todos os animais disponíveis para adoção",
        backgroundUrl: "/images/allanimals.jpg",
      },
    });
}

export const dogs = (req: Request, res: Response) => {};
export const cats = (req: Request, res: Response) => {};
export const fishes = (req: Request, res: Response) => {};
