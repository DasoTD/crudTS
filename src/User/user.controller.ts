import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User, UserInput } from '../models/user.model';


const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; //get userId
    const { enabled, fullName, role } = req.body;
  
    const user = await User.findById(id);
  
    if (!user) {
      return res.status(404).json({ message: `User with id "${id}" not found.` });
    }
  
    if (!fullName || !role) {
      return res.status(422).json({ message: 'The fields fullName and role are required' });
    }
  
    await User.updateOne({ _id: id }, { enabled, fullName, role });
  
    const userUpdated = await User.findById(id);
  
    return res.status(200).json({ data: userUpdated });
    } catch (error: unknown) {
        return res.json(error);
    }
  };
  
  const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;//get userId
  
    await User.findByIdAndDelete(id);
  
    return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error: unknown) {
        return res.json(error);
    }
  };
  
  //export { createUser, deleteUser, getAllUsers, getUser, updateUser };

export {  deleteUser, updateUser}