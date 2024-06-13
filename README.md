## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você tem uma máquina `<Windows / Linux / Mac>`
* Você instalou a versão mais recente do `NodeJS`

<br/>
<br/>


## Estrutura de Pastas
A estrutura do projeto está organizada da seguinte forma:

```
.next/
node_modules/
src/
  ├── app/
  │   ├── (auth)/
  │   ├── (landing)/
  │   ├── api/
  │   ├── components/
  │   ├── dashboard/
  │   │   ├── balance/
  │   │   ├── components/
  │   │   ├── help/
  │   │   ├── plans/
  │   │   ├── saved-wallets/
  │   │   ├── search-wallets/
  │   │   ├── settings/
  │   │   │   ├── layout.tsx
  │   │   ├── page.tsx
  │   ├── globals.css
  │   ├── layout.tsx
  ├── assets/
  ├── contexts/
  ├── domain/
  ├── hooks/
  ├── lib/
  ├── mocks/
  ├── providers/
  ├── services/
  ├── utils/
  │   ├── middleware.ts
.env.example
.env.local
.eslintrc.json
```

## ⚙️ Instalando

Para instalar execute no terminal:

npm:
```
npm i
```

yarn:
```
yarn install
```

pnpm:
```
pnpm i
```

<br/>

## 🚀 Rodando o projeto

Primeiramente crie um arquivo ```.env.local``` na raíz do projeto e adicione as seguintes variáveis de ambiente e seus respectivos valores:
<br/>
<br/>

```
# API ROUTES
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# BACK-END
NEXT_PUBLIC_API_BASE_URL="http://127.0.0.1:8000"
NEXT_PUBLIC_API_KEY="api-key"

# STRIPE
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=""
STRIPE_SECRET_KEY=""

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="secret"
PROJECT_ID="79e8e12939d28b3317fa48a7abb3c41b"
```


Para rodar o projeto digite no terminal:

npm:
```
npm run dev
```
yarn:
```
yarn dev
```

pnpm:
```
pnpm run dev
```

<br/>


## 🚀 Tecnologias utilizadas

O projeto está desenvolvido utilizando as seguintes tecnologias:

- Typescript <img width="25px" height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
- ReactJS <img width="25px" height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
- NextJS <img width="25px" height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
- TailwindCSS <img width="25px" height="25px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />