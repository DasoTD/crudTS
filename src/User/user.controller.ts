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

export { createUser}