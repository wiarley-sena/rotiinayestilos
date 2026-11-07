# Rotiinayestilos

Site da loja feito com Vite + React + TypeScript + React Router.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist
```

## Onde editar

- `src/Data/products.ts`: categorias e produtos. Para mostrar o preço, adicione `price: "R$ 29,90"` no produto.
- `src/assets/`: fotos (todas em proporção 3:4, 720x960).
- `src/utils/constants.ts`: @ do Instagram.
- `src/App.css` e `src/index.css`: estilos.

## Publicar

Na Vercel ou Netlify basta importar o repositório. O `vercel.json` já faz as rotas (`/rosto`, `/intimo`, `/labios`) funcionarem.
