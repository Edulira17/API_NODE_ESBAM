const {Users} = require ('../models')
require ('dotenv').config()

module.exports = class UsersController{
    //trazer tudo do banco para tela:
    static async showAll(req, res){
        try {
            const users = await Users.findAll()
            res.start (200).json({
                data: users
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async show (req, res){
        try{
            const user = await Users.findByPK(req.params.id)
            res.status(200).json({
                data:user 
            })
        } catch(e){
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async create(req, res){
        try {
            const user = await users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })
            res.status(200).json({
                data: "Salvo com sucesso!"
            })
        } catch (e) {   
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async update(req, res){
        try {
            const user = await Users.findByPK(req.params.id)
            const result = await Users.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })
            res.status(500).json({
                data: "Atualizado com sucesso!"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async delete(req, res){
        try {
            const user = await Users.findByPK(req.params.id)
            await user.destroy()
            res.status(200).json({
                data: "Excluido com sucesso!"
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};

