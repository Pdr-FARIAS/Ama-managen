import dotenv from 'dotenv';
dotenv.config();

import UserService from './src/service/UserService.js';

async function main() {
    try {
        const token = await UserService.SolicitarToken();
        console.log('Token obtido:', token);
    } catch (error) {
        console.error('Erro ao obter token:', error.message);
    }
}

main();
