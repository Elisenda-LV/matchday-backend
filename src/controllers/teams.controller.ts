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

//Show Teams by Id:

export const getTeamsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await Team.findByPk(id);

    if(team){
        res.status(200).json(team)
    }else{
        res.status(404).json({
            msg: `There is no team with that id ${id}`
        })
    }
}

//Delete Team:

export const deleteTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await Team.findByPk(id);

    if(team){
        await team.destroy();
        res.json({
            msg: 'Team deleted'
        })
        
    } else {
        res.status(404).json({
            msg: `There is no team with that id ${id}`
        })
    }
}

//Post Team:

export const postTeam = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Team.create(body);

        res.json({
            msg: 'Team added'
        })
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        })
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
        console.log(error);
        res.json({
            msg: 'Connect to support...'
        })
    }
}