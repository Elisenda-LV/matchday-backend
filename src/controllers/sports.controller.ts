import Sport from '../models/sports.models';
import { Request, Response } from "express";

//Show Sports list:

export const getListSports = async (req: Request, res: Response) => {

    try {
        const sports = await Sport.findAll();
        if (sports.length === 0) {
            res.status(404).json({ message: "No sports found" });
        } else {
            res.status(200).json(sports);
        }
    } catch (error) {
        console.error("Error retrieving sports:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}