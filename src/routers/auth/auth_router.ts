import {Router, Response} from 'express';
import {loginOrEmail, password} from '../../middlewares/authorization_validation/auth_validation';
import {errorsValidation} from '../../middlewares/errors_reply/errors_validation';
import {RequestWithBody} from '../../types/types';
import {LoginInputModel} from '../../models/auth/loginInputModel';
import {usersService} from '../../domain/users/users_service';


export const authRouter = Router()

authRouter.post('/login',
    loginOrEmail,
    password,
    errorsValidation,
    async (req:RequestWithBody<LoginInputModel>, res: Response) => {
    const checkResult = await usersService.checkCredentials(req.body)
        if (!checkResult) {
            res.sendStatus(401)
            return
        } else  {
            res.sendStatus(204)
        }
})