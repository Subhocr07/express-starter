var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../model/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";
export const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = yield bcrypt.hash(password, 10);
        const user = yield User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ token: generateToken(user._id) });
    }
    catch (error) {
        res.status(400).json({ message: "Error registering user" });
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User.findOne({ email });
        if (!user || !(yield bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.json({ token: generateToken(user._id) });
    }
    catch (error) {
        res.status(400).json({ message: "Login failed" });
    }
});
