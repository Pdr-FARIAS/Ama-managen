// src/service/RegistroService.js
import prisma from '../config/prismaClient.js';

export const create = async (data) => {
    return await prisma.registro.create({ data });
};

export const list = async () => {
    return await prisma.registro.findMany();
};

export const update = async (id, data) => {
    return await prisma.registro.update({
        where: { id },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.registro.delete({
        where: { id },
    });
};
