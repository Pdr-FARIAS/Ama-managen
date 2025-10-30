import prisma from '../config/prismaClient.js';
import { EnderecoError } from '../error/Error.js';
class EnderecoService {
    async registerEndereco(endereco, tx = prisma) {
        try {

            if (!endereco || !endereco.lote) {
                throw new EnderecoError("Os dados de endereço são inválidos ou incompletos.", 400);
            }

            const novoEndereco = await tx.endereço.create({
                data: {
                    lote: endereco.lote,
                    numero: endereco.numero,
                    quadra: endereco.quadra || null,
                    bairro: endereco.bairro || null,
                    referencia: endereco.referencia || null,
                },
            });

            return novoEndereco;
        } catch (error) {
            console.error("Erro ao registrar endereço:", error.message);
            throw new EnderecoError("Falha ao salvar endereço", 400);
        }
    }

    async updateEndereco(filtros, userId, body) {
        const resultado = await this.searchEndereco(filtros);
        const endereco = resultado[0];

        try {
            const updatedEndereco = await prisma.endereço.update({
                where: { endereçoid: endereco.endereçoid },
                data: {
                    lote: body.lote,
                    numero: body.numero,
                    quadra: body.quadra,
                    bairro: body.bairro,
                    referencia: body.referencia,
                },
            });

            return updatedEndereco;
        } catch (error) {
            console.error("Erro ao atualizar endereço:", error.message);
            throw new Error("Falha ao alterar endereço");
        }
    }

    async deleteEndereco(id) {
        try {
            const endereco = await prisma.endereço.findUnique({
                where: { endereçoid: id },
            });
            if (!endereco) {
                throw new Error("Endereço não encontrado para exclusão.");
            }
            await prisma.endereço.delete({
                where: { endereçoid: id },
            });
            console.log(`Endereço ${id} deletado com sucesso.`);
            return { message: `Endereço ${id} deletado com sucesso.` };
        } catch (error) {
            console.error("Erro ao deletar endereço:", error.message);
            throw new Error("Falha ao deletar endereço");
        }
    }


    async searchEndereco(filtros) {
        const { lote, quadra, bairro } = filtros;

        if (!lote && !quadra && !bairro) {
            throw new EnderecoError("Informe pelo menos um campo para pesquisar o endereço.", 400);
        }

        const resultados = await prisma.endereço.findMany({
            where: {
                AND: [
                    lote ? { lote: { contains: lote } } : {},
                    quadra ? { quadra: { contains: quadra } } : {},
                    bairro ? { bairro: { contains: bairro } } : {},
                ],
            },
        });

        if (!resultados.length) {
            throw new EnderecoError("Nenhum endereço encontrado com os critérios informados.", 404);
        }

        return resultados;
    }
}
export default new EnderecoService();
