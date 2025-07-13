# Loja de Games - Back-end

API REST desenvolvida em NestJS para gerenciamento de uma loja de games. Este projeto foi desenvolvido como parte da APS da disciplina **Desenvolvimento Web III**.

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeORM
- MySQL

## 📚 Funcionalidades

- ✅ Cadastro de clientes
- ✅ Cadastro de jogos com controle de estoque
- ✅ Registro de vendas
- ✅ Relacionamento entre entidades (clientes, jogos e vendas)

## 🚀 Como executar

1. Clone o projeto:

```bash
git clone https://github.com/LucasSaviolo/loja-games-backend.git
cd loja-games-backend
```

2. Instale as dependências:
```bash
npm install
```
3. Configure o banco de dados criando um arquivo .env com:
```bash
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=loja_games
```
4. Rode as migrações ou use synchronize: true no TypeORM para gerar as tabelas.

5. Inicie a aplicação:
```bash
npm run start
```
A API estará disponível em: http://localhost:3001

📁 Estrutura de pastas (exemplo)
```
src/
├── cliente/
├── jogo/
├── venda/
└── main.ts
```
📌 Observações

As rotas seguem o padrão REST (/clientes, /jogos, /vendas)

O front-end está disponível neste repositório: [loja-games-frontend](https://github.com/LucasSaviolo/loja-games-frontend)

---
