import TeamPlayer from "../models/teams-players.models";
import { Request, Response } from "express";

//Show teams_players list:

export const getListTeamPlayers = async (req: Request, res: Response) => {

    try {
        const tp = await TeamPlayer.findAll();
        if (tp.length === 0) {
            res.status(404).json({ message: "No team_player found" });
        } else {
            res.status(200).json(tp);
        }
    } catch (error) {
        console.error("Error retrieving team_player:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }


}