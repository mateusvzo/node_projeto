import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Usuarios from '../models/Usuarios';

interface Request {
    email: string;
    password: string;
}

class SessionsUsuariosController {
    public async store({
        email,
        password,
    }: Request): Promise<{ user: Usuarios }> {
        const usuariosRepository = getRepository(Usuarios);
        const user = await usuariosRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Combinação de email/senha incorretos');
        }

        const verificaSenha = await compare(password, user.password);

        if (!verificaSenha) {
            throw new Error('Combinação de email/senha incorretos');
        }

        return {
            user,
        };
    }
}

export default SessionsUsuariosController;
