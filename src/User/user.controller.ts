import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User, UserInput } from '../models/user.model';


const createUser =async (req:Request, res: Response) => {
    try {
        const { fullName, email, password, role, enabled} = req.body;

        if (!email || !fullName || !password || !role) {
            return res.status(422).json({ message: 'The fields email, fullName, password and role are required' });
        }
        const SALT = 10; //hard codimng though
          const encryptedPassword = await bcrypt.hash(
            password.toString(),
            Number(SALT)
          );
          const userInput: UserInput = {
            fullName,
            email,
            password: encryptedPassword,
            enabled,
            role,
          };

          const userCreated = await User.create(userInput);

          return res.status(201).json({ data: userCreated });
    } catch (error: unknown) {
        return res.json(error);
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
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
        const { id } = req.params;
  
    await User.findByIdAndDelete(id);
  
    return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error: unknown) {
        return res.json(error);
    }
  };
  
  //export { createUser, deleteUser, getAllUsers, getUser, updateUser };

export { createUser, deleteUser, updateUser}