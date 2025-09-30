// src/service/UserService.js
import prisma from '../config/prismaClient.js';

export const create = async (data) => {
    return await prisma.user.create({ data });
};

export const list = async () => {
    return await prisma.user.findMany();
};

export const update = async (id, data) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
};
