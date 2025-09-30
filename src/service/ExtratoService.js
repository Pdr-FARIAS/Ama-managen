// src/service/ExtratoService.js
import prisma from '../config/prismaClient.js';

export const create = async (data) => {
    return await prisma.extrato.create({ data });
};

export const list = async () => {
    return await prisma.extrato.findMany();
};

export const update = async (id, data) => {
    return await prisma.extrato.update({
        where: { id },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.extrato.delete({
        where: { id },
    });
};
