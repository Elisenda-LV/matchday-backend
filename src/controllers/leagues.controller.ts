import League from "../models/leagues.models";
import { Request, Response } from "express";


//Show Leagues list :

export const getListLeagues = async (req: Request, res: Response) => {
  
    try {
        const leagues = await League.findAll();
        if (leagues.length === 0) {
            res.status(404).json({ message: "No leagues found" });
        } else {
            res.status(200).json(leagues);
        }
    } catch (error) {
        console.error("Error retrieving leagues:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}