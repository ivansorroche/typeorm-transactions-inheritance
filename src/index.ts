import { Not } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Post } from "./entity/Post"

AppDataSource.initialize().then(async () => {
    //SHOW USER
    console.log("Searching for current users...")
    const users = await AppDataSource.manager.find(User)
    console.log(users)

    console.log('Deleting existent users...');
    //REMOVER USERS
    users.forEach(async u => {
        const usrDeleted = await AppDataSource.manager.delete(User, u.id)
        console.log(`Deleted : ${usrDeleted}`)
    })

    //ADD USER
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Ivan"
    user.email = "ivan.teste@teste.com"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    //EDIT USER
    console.log("Updated usr at database...")
    user.email = 'teste2@teste.com'
    await AppDataSource.manager.save(user)

    console.log("queries ...")
    console.log("left join ...")
    const rawData = await AppDataSource.manager.query('SELECT * FROM USER');
    console.log(rawData);

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

