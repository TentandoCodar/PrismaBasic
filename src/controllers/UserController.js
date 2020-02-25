const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

class UserController {
    async store(req,res) {
        const {email, name, password, title, content} = req.body;
        const hashed_password = await bcrypt.hash(password, 15);
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashed_password,
                posts: {
                    create: {
                        title: title,
                        content: content
                    }
                }
            },
            include: {
                posts: true
            }
        });
        return res.send({user});
    }

    async index(req,res) {
        const user = await prisma.user.findMany();
        return res.json(user);
    }
    
}

module.exports = new UserController();