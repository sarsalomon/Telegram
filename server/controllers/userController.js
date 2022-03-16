const ApiError = require("../error/ApiError");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require("../models/models");

const generateJwt = (id, email, fish) => {
    return token = jwt.sign(
        {id, email, fish},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next){
        const {email, password, fish} = req.body;
        if (!email){
            return next(ApiError.badRequest("Login yozilmadi"));
        }else if (!password){
            return next(ApiError.badRequest("Parol yozilmadi"));
        }else if (!fish){
            return next(ApiError.badRequest("fish yozilmadi"));
        }
        const condidate = await User.findOne({where: {email}})
        if (condidate) {
            return next(ApiError.badRequest("Bu foydalanuvchi tizimda bor"));
        }
        const hashPassword= await bcrypt.hash(password, 5);
        const user = await User.create({email, password:hashPassword, fish});
        const token = generateJwt(user.id, user.email, user.fish)
        return res.json({token});
    }

    async login(req, res, next){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal("Login yoki Parol noto`g`ri"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Login yoki Parol noto`g`ri'));
        }
        const token = generateJwt(user.id, user.email, user.fish);
        return res.json({token});
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.login, req.user.fish);
        return res.json({token});
    }
}

module.exports = new UserController();