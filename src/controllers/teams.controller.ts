import  Team  from "../models/teams.model";
import { Request, Response } from "express";
import { validationResult } from 'express-validator';

//CRUD TEAMS

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

//Show Teams by Id:

export const getTeamsById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const team = await Team.findByPk(id);
    
        if(team){
            res.status(200).json(team)
        }else{
            res.status(404).json({
                msg: `There is no team with that id ${id}`
            })
        }

    } catch (error) {
        console.error("Error retrieving id team:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//Delete Team:

export const deleteTeam = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const team = await Team.findByPk(id);
            await team!.destroy();
            res.json({
                msg: 'Team deleted'
            })
        }

    } catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
}

//Post Team:

export const postTeam = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const { body } = req;
            await Team.create(body);

            res.json({
                msg: 'Team added',
                data: body,
            })
        }

    } catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
}

//Update Team:

export const updateTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const team = await Team.findByPk(id);
    
        if(team){
            await team.update(body);
            res.json({
                msg: 'Team updated!'
            })
    
        } else {
            res.status(404).json({
                msg: `There is no team with that id ${id}`
            })
        }

    } catch (error){
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})
    }
}