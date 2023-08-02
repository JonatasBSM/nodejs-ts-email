import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function index() {

}

export function store(req, res) {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).json({message: "Ambos os campos são obrigatórios!"});
    }

    const token = (sign({userId: username, password: password}, process.env.SECRET));

    res.status(200).json({ token })
}