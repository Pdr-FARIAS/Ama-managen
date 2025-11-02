# 🏦 AMA Manager — Backend (API Node.js + Prisma + Banco do Brasil)

> API RESTful desenvolvida em **Node.js** com **Express**, **Prisma ORM**, **JWT** e integração com a **API do Banco do Brasil (Open Finance)**.  
> Este back-end gerencia autenticação, eventos, endereços, registros e extratos financeiros em tempo real via **Socket.IO**.

---

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Linguagem** | Node.js (ES Modules) |
| **Framework** | Express.js |
| **Banco de Dados** | PostgreSQL (via Prisma ORM) |
| **Autenticação** | JWT (Json Web Token) + Bcrypt |
| **Tempo Real** | Socket.IO |
| **Integração Externa** | API Banco do Brasil (Open Finance / Sandbox) |
| **Validação** | Zod + Middlewares personalizados |
| **Ambiente** | dotenv + nodemon para desenvolvimento |

---

## 📁 Estrutura de Pastas

```
📦 backend/
├── src/
│   ├── controller/
│   ├── middlewares/
│   ├── service/
│   ├── utils/
│   ├── router/
│   ├── config/
│   └── error/
├── .env
├── package.json
├── prisma/
│   └── schema.prisma
└── server.js
```

---

## 🔑 Principais Funcionalidades

### 🧍‍♂️ Usuários
- Registro (`POST /user/register`)
- Login (`POST /user/login`)
- Atualização de dados (`PUT /user`)
- Exclusão (`DELETE /user/:id`)
- Autenticação JWT via middleware (`Bearer Token`)

### 🧾 Extrato Bancário
- Integração com API Banco do Brasil (Sandbox)
- Sincronização de lançamentos (`GET /extrato/sincronizar`)
- Inserção manual (`POST /extrato/manual`)
- Filtros por período (`GET /extrato?dataInicio=&dataFim=`)
- Cálculo automático de entradas, saídas e saldo
- Exclusão de extrato específico ou total

### 📊 Gráficos Financeiros
- Endpoint: `GET /extrato/grafico`
- Retorna valores somados por data, com débitos negativos e créditos positivos.

### 🗓️ Eventos, Endereços e Registros
- CRUD completo (Create, Read, Update, Delete)
- Relações configuradas no Prisma (`evento` ↔ `endereco` ↔ `registro`)
- Atualizações em tempo real com `Socket.IO`

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Instalar dependências:
```bash
npm install
```

### 2️⃣ Criar o arquivo `.env`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ama_manager"
JWT_SECRET="sua_chave_super_secreta"
PORT=3000

# Banco do Brasil Sandbox
GW_DEV_APP_KEY="sua_chave_do_bb"
BB_CLIENT_ID="seu_client_id"
BB_CLIENT_SECRET="seu_client_secret"
```

### 3️⃣ Executar o Prisma:
```bash
npx prisma migrate dev
```

### 4️⃣ Rodar o servidor:
```bash
npm run dev
```
A API será iniciada em: **http://localhost:3000**

---

## 🧠 Fluxo de Autenticação

1. O usuário faz login (`/user/login`);
2. A API gera um **JWT** válido por 2 horas;
3. O token é enviado no **header Authorization**:
   ```
   Authorization: Bearer seu_token_aqui
   ```
4. O middleware `authentication` valida o token e injeta `req.userId`.

---

## 🧰 Scripts Úteis

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Executa o servidor em modo desenvolvimento |
| `npm run build` | Transpila o código para produção |
| `npx prisma studio` | Abre o painel visual do banco |
| `npx prisma migrate dev` | Executa migrações do banco |
| `npm test` | Executa testes (Jest) |

---

## 🔒 Segurança
- Tokens expiram em 2h (JWT).
- Hash de senha com **bcrypt (10 rounds)**.
- Middleware de autenticação para rotas protegidas.
- Middleware de permissão (ADMIN / USER).

---

## 🧩 To-Do / Melhorias Futuras

- [ ] Emitir eventos `extrato_atualizado` via Socket.IO.
- [ ] Adicionar testes unitários (Jest).
- [ ] Criar logs de erro (Winston/Pino).
- [ ] Adicionar Swagger para documentação automática.
- [ ] Implementar cache (Redis).

---

## 🧑‍💻 Autor

**Pedro Gabriel Farias**  
💼 Projeto TCC — Sistema de Gestão AMA Manager  
📅 2025  
🔗 Desenvolvido com Node.js + Prisma + React + Banco do Brasil API
