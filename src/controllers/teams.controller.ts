import Team from '../models/teams.models';
import { Request, Response } from "express";


//Show Teams list:

export  const getListTeams = async (req: Request, res: Response) => {

    try {
        const teams = await Team.findAll();
        if (teams.length === 0) {
            res.status(404).json({ message: "No teams found" });
        } else {
            res.status(200).json(teams);
        }
    } catch (error) {
        console.error("Error retrieving teams:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}