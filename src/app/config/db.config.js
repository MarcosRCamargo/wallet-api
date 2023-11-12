import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let sequelize;
dotenv.config({ path: path.resolve(__dirname, '../.env') });


sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
export async function connectDb(){
  try {
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
   }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
   });
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}

export async function disconectDb(){

}

export default sequelize;

