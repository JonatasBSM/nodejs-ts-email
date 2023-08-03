import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "../database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export const startConnection = async () => await AppDataSource.initialize()
    .then(() => console.log("conectado"))
    .catch((error) => console.log(error));