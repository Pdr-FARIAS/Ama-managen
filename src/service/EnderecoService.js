// src/service/EnderecoService.js
import prisma from '../config/prismaClient.js';

export const create = async (data) => {
    return await prisma.endereco.create({ data });
};

export const list = async () => {
    return await prisma.endereco.findMany();
};

export const update = async (id, data) => {
    return await prisma.endereco.update({
        where: { id },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.endereco.delete({
        where: { id },
    });
};
export const get = async (id) => {
    return await prisma.endereco.findUnique({
        where: { id },
    });
};
