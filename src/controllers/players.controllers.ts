import Player from '../models/teams-players.model'
import { Request, Response } from "express";
import { validationResult } from 'express-validator';

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

//Show Player by Id:

export const getPlayerById = async(req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const player = await Player.findByPk(id);
    
        if(player){
            res.status(200).json(player)
        }else{
            res.status(404).json({
                msg: `There is no player with that id ${id}`
            })
        }
    } catch (error) {
        console.error("Error retrieving id league:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }


}

//Delete player:

export const deletePlayer = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const errors = validationResult(req);

        //If there are validation errors, respond with a 400 Bad Request status.

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const player = await Player.findByPk(id);
            await player!.destroy();
            res.json({
                msg: 'Player deleted'
            })
        }

    } catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
   
} 

//Add a new player:

export const postPlayer = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        } else {
            const { body } = req;
            await Player.create(body);

            res.json({
                msg: 'Player added',
                data: body,
            })
        }

    } catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error'})

    }
  
}

//Update league:

export const updatePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const player = await Player.findByPk(id);
    
        if(player){
            await player.update(body);
            res.json({
                msg: 'Player updated!'
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