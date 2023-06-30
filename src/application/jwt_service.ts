import jwt, { sign } from 'jsonwebtoken';
import {setting} from '../settings';
import {LoginSuccessViewModel} from '../models/auth/loginSuccessViewModel';
import {UserDbType} from '../types/types';

export const jwtService = {
    async createJWT(user: UserDbType): Promise<LoginSuccessViewModel> {
        const token = jwt.sign({userId: user._id}, setting.JWT_SECRET, {expiresIn: '48h'})
        return {
            accessToken: token
            }
    }
}