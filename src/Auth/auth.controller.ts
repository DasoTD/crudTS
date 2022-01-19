import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { authenticate } from '../../Middleware/Authenticate';
import { User, UserInput } from '../models/user.model';
const login = async(req: Request, res: Response) => {
    try {
        const SALT: number = 10;
        const {usernameoremail, password} = req.body
        if(!usernameoremail || ! password){
            return res.status(422).json({ message: 'The fields username and password are required' });
        }

        const user: any = await User.findOne({
            $or: [
              { username: usernameoremail.toLowerCase() },
              { email: usernameoremail.toLowerCase() },
            ],
          });
          if(!user){
              return res.status(404).json({ message: "user not found"})
          }
          const match =  bcrypt.compareSync(password, user.password)
          if(!match){
            return res.status(400).json({ message: "password does not match"})
        }

        const accessToken = await authenticate(user);
        const refreshToken = await bcrypt.hash(accessToken, Number(SALT));
        user.refreshToken = refreshToken;
        user.accessToken = accessToken;
        await user.save()

    } catch (error: unknown) {
        
    }
}

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
export{ login, createUser} 