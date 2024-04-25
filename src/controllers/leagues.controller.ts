import League from "../models/leagues.models";
import Team from "../models/teams.model";

import { Request, Response } from "express";
import { validationResult } from 'express-validator';

//CRUD LEAGUES

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

//Show League by Id:

export const getLeagueById = async(req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const league = await League.findByPk(id);
    
        if(league){
            res.status(200).json(league)
        }else{
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            })
        }
    } catch (error) {
        console.error("Error retrieving id league:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

//Delete league:

export const deleteLeague = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const league = await League.findByPk(id);
            await league!.destroy();
            res.json({
                msg: 'League deleted'
            })
        }

    } catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
   
} 

//Add a new league:

export const postLeague = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const { body } = req;
            await League.create(body);

            res.json({
                msg: 'League added',
                data: body,
            })
        }

    } catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
  
}

//Update league:

export const updateLeague = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const league = await League.findByPk(id);
    
        if(league){
            await league.update(body);
            res.json({
                msg: 'League updated!'
            })
    
        } else {
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            })
        }

    } catch (error){
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
   
}

//Show league teams:

export const getLeagueTeams = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const league = await League.findByPk(id, {
            include: Team
        });

        if(league){
            res.status(200).json(league)
        }else{
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            })
        }

    } catch (error) {
        console.error("Error retrieving league teams:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}