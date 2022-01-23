import { Request, Response } from 'express';
import {Role, RoleInput} from '../models/role.model'


const createRole = async(req: Request, res: Response) => {
    try {
        const {name, description} = req.body; //destructuring payload

    if (!name || !description) {
        return res.status(422).json({
          message: 'The fields name and description are required',
        });
    }

    const roleInput: RoleInput = {
        name,
        description
    }

    const roleCreated = await Role.create(roleInput);

    return res.status(201).json(roleCreated); 
    } catch (error: unknown) {
        return res.json(error);
    }
}

const updateRole = async(req: Request, res:Response) => {
    try {
        const { id} = req.params; //get roleID
        const { name, description} = req.body;
        let role = await Role.findById(id);

        //check if role is not found to return error
        if(!role){
            return res.status(404).json("role with this id not found")
        }   
        const updatedRole = await Role.updateOne({_id: id}, {name, description});
        return res.status(200).json({data: updatedRole});
    } catch (error: unknown) {
        return res.json(error);
        
    }
}
const getAllRoles = async(req:Request, res:Response) => {
    try {
        let roles = await Role.find({});
        return res.status(200).json({data: roles});
    } catch (error: unknown) {
        return res.json(error);
    }
}

const getRole = async(req:Request, res:Response) =>{
    try {
        const {id} = req.params;
        let role = await Role.findById(id);
        return res.status(200).json({data: role});
    } catch (error: unknown) {
        return res.json(error);
    }
}

const deleteRole =async (req:Request, res: Response) => {
    try {
        const {id} = req.params;
        let role = await Role.findByIdAndDelete(id);
        return res.status(200).json({data: role})
    } catch (error: unknown) {
        return res.json(error);
    }
}

export  {
    createRole,
    updateRole,
    getAllRoles,
    getRole,
    deleteRole
}