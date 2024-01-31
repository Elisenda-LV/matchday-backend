import Player from '../models/players.models';
import { Request, Response } from "express";

//Show Players list:

export const getListPlayers = async (req: Request, res: Response) => {

    try {
        const players = await Player.findAll();
        if (players.length === 0) {
            res.status(404).json({ message: "No players found" });
        } else {
            res.status(200).json(players);
        }
    } catch (error) {
        console.error("Error retrieving players:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
      
}