-- CreateEnum
CREATE TYPE "public"."tipo_lançamento" AS ENUM ('DEBITO', 'CREDITO');

-- CreateTable
CREATE TABLE "public"."user" (
    "userid" SERIAL NOT NULL,
    "user" CHAR(20) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "public"."extrato_Movimentaçao" (
    "trasaçaoid" TEXT NOT NULL,
    "codigoAgenciaOrigem" INTEGER NOT NULL,
    "data_lançamento" TIMESTAMP(2) NOT NULL,
    "descriçao" TEXT NOT NULL,
    "lançamento" "public"."tipo_lançamento" NOT NULL DEFAULT 'DEBITO',
    "valor" DECIMAL(6,2) NOT NULL,
    "data_Extrato" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numero_Conta_origem" INTEGER NOT NULL,
    "codigo_Banco" INTEGER NOT NULL,

    CONSTRAINT "extrato_Movimentaçao_pkey" PRIMARY KEY ("trasaçaoid")
);

-- CreateTable
CREATE TABLE "public"."criar_evento" (
    "eventoid" INTEGER NOT NULL,
    "titulo" CHAR(255) NOT NULL,
    "image" TEXT,
    "descriçao" CHAR(255) NOT NULL,
    "criar_evento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_termino" DATE NOT NULL,
    "ultima_mod" TIMESTAMP(3) NOT NULL,
    "criadorid" INTEGER NOT NULL,

    CONSTRAINT "criar_evento_pkey" PRIMARY KEY ("eventoid")
);

-- CreateTable
CREATE TABLE "public"."endereço" (
    "endereçoid" TEXT NOT NULL,
    "lote" CHAR(30) NOT NULL,
    "numero" INTEGER NOT NULL,
    "quadra" CHAR(20) NOT NULL,
    "bairro" CHAR(15) NOT NULL,
    "referencia" CHAR(50) NOT NULL,

    CONSTRAINT "endereço_pkey" PRIMARY KEY ("endereçoid")
);

-- CreateTable
CREATE TABLE "public"."registo_evento" (
    "registro_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "idade_responsavel" DATE NOT NULL,
    "created_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endereçoid" TEXT NOT NULL,
    "eventoid" INTEGER NOT NULL,

    CONSTRAINT "registo_evento_pkey" PRIMARY KEY ("registro_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_key" ON "public"."user"("user");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registo_evento_nome_key" ON "public"."registo_evento"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "registo_evento_sobrenome_key" ON "public"."registo_evento"("sobrenome");

-- CreateIndex
CREATE UNIQUE INDEX "registo_evento_responsavel_key" ON "public"."registo_evento"("responsavel");

-- CreateIndex
CREATE UNIQUE INDEX "registo_evento_idade_key" ON "public"."registo_evento"("idade");

-- AddForeignKey
ALTER TABLE "public"."criar_evento" ADD CONSTRAINT "criar_evento_criadorid_fkey" FOREIGN KEY ("criadorid") REFERENCES "public"."user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registo_evento" ADD CONSTRAINT "registo_evento_endereçoid_fkey" FOREIGN KEY ("endereçoid") REFERENCES "public"."endereço"("endereçoid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registo_evento" ADD CONSTRAINT "registo_evento_eventoid_fkey" FOREIGN KEY ("eventoid") REFERENCES "public"."criar_evento"("eventoid") ON DELETE RESTRICT ON UPDATE CASCADE;
