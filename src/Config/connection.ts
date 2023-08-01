import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

export default async function connect() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        });

        connection.connect(function (error) {
            if(error)
                throw error;

            console.log("Conectado!");
        })
        
    }catch(error) {
        console.log(error);
    }
    
}