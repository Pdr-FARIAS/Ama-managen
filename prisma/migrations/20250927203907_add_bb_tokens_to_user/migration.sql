-- CreateTable
CREATE TABLE `user` (
    `userid` INTEGER NOT NULL AUTO_INCREMENT,
    `user` CHAR(20) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `bb_access_token` VARCHAR(191) NULL,
    `bb_refresh_token` VARCHAR(191) NULL,
    `bb_token_expires_at` DATETIME(3) NULL,

    UNIQUE INDEX `user_user_key`(`user`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extrato_Movimentaçao` (
    `trasaçaoid` VARCHAR(191) NOT NULL,
    `codigoAgenciaOrigem` INTEGER NOT NULL,
    `data_lançamento` TIMESTAMP(2) NOT NULL,
    `descriçao` VARCHAR(191) NOT NULL,
    `lançamento` ENUM('DEBITO', 'CREDITO') NOT NULL DEFAULT 'DEBITO',
    `valor` DECIMAL(6, 2) NOT NULL,
    `data_Extrato` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `numero_Conta_origem` INTEGER NOT NULL,
    `codigo_Banco` INTEGER NOT NULL,

    PRIMARY KEY (`trasaçaoid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `criar_evento` (
    `eventoid` INTEGER NOT NULL,
    `titulo` CHAR(255) NOT NULL,
    `image` VARCHAR(191) NULL,
    `descriçao` CHAR(255) NOT NULL,
    `criar_evento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_termino` DATE NOT NULL,
    `ultima_mod` DATETIME(3) NOT NULL,
    `criadorid` INTEGER NOT NULL,

    PRIMARY KEY (`eventoid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereço` (
    `endereçoid` VARCHAR(191) NOT NULL,
    `lote` CHAR(30) NOT NULL,
    `numero` INTEGER NOT NULL,
    `quadra` CHAR(20) NOT NULL,
    `bairro` CHAR(15) NOT NULL,
    `referencia` CHAR(50) NOT NULL,

    PRIMARY KEY (`endereçoid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registo_evento` (
    `registro_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `idade_responsavel` DATE NOT NULL,
    `created_registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endereçoid` VARCHAR(191) NOT NULL,
    `eventoid` INTEGER NOT NULL,

    UNIQUE INDEX `registo_evento_nome_key`(`nome`),
    UNIQUE INDEX `registo_evento_sobrenome_key`(`sobrenome`),
    UNIQUE INDEX `registo_evento_responsavel_key`(`responsavel`),
    UNIQUE INDEX `registo_evento_idade_key`(`idade`),
    PRIMARY KEY (`registro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `criar_evento` ADD CONSTRAINT `criar_evento_criadorid_fkey` FOREIGN KEY (`criadorid`) REFERENCES `user`(`userid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registo_evento` ADD CONSTRAINT `registo_evento_endereçoid_fkey` FOREIGN KEY (`endereçoid`) REFERENCES `endereço`(`endereçoid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registo_evento` ADD CONSTRAINT `registo_evento_eventoid_fkey` FOREIGN KEY (`eventoid`) REFERENCES `criar_evento`(`eventoid`) ON DELETE RESTRICT ON UPDATE CASCADE;
