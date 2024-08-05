# Gamer Store

Este é um app de venda de jogos digitais, desenvolvido com Expo e React Native. O aplicativo permite que os usuários naveguem por uma lista de jogos, adicionem ou removam itens do carrinho e visualizem o valor total do carrinho.

## Tecnologias Utilizadas

<p align="center">
  <img height="150px" src="https://i.imgur.com/y0J4S7N.png" />
</p>
Este projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **React Native**: Biblioteca javascript para criar aplicativos móveis nativos usando React.
- **Expo**: Framework content um conjunto de ferramentas e serviços para desenvolvimento rápido com React Native.
- **NativeWind**: Biblioteca para estilos utilitários no estilo Tailwind CSS em projetos React Native.
- **React Query**: Gerenciamento de estado de servidor para dados assíncronos e cache de requisições.
- **Expo Router**: Sistema de roteamento para navegação no aplicativo.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Jest**: Framework de testes para garantir a qualidade do código.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **MMKV**: Armazenamento eficiente de dados em dispositivos móveis.
- **@testing-library/react-native**: Biblioteca para testes de componentes React Native.
- **Biome**: Ferramenta de formatação e linting para código.
- **Husky**: Ferramenta para criar hooks de Git, permitindo executar scripts antes de commits e pushs.
- **Lefthook**: Ferramenta para gerenciar hooks de Git, garantindo que os testes e verificação de lint sejam executados antes de qualquer push para o repositório remoto.

## Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- **Tela Inicial**:

  - Exibe uma lista de jogos disponíveis na loja.
  - Permite adicionar jogos ao carrinho.
  - Permite remover jogos do carrinho.
  - Os itens estão vindo via API armazenados no GIST.

- **Tela de Detalhes do Jogo**:

  - Exibe detalhes completos do jogo selecionado.
  - Permite adicionar o jogo ao carrinho.
  - Permite remover o jogo do carrinho.

- **Tela do Carrinho**:
  - Exibe todos os jogos adicionados ao carrinho.
  - Mostra o valor total do carrinho.
  - Permite remover itens individuais do carrinho.

<p align="center">
  <img height="500px" src="https://i.imgur.com/DIHv6Cl.png" />
</p>
<p align="center">
  <img height="500px" src="https://i.imgur.com/0dWNg6w.png" />
</p>
<p align="center">
  <img height="500px" src="https://i.imgur.com/HjDP8PT.png" />
</p>

## Como Executar o Projeto

Para executar o projeto localmente, siga estes passos:

1. **Clone o Repositório**

   ```bash
   https://github.com/ovinidev/GamerStore.git
   ```

2. **Navegue para o Diretório do Projeto**

   ```bash
   cd GamerStore
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

4. **Pré-Construção (Opcional)**

   Para realizar a pré-construção do projeto:

   ```bash
   npm run prebuild
   ```

5. **Inicie o Projeto**

   Para iniciar o projeto no modo de desenvolvimento:

   ```bash
   npm start
   ```

   Isso abrirá o Expo DevTools, onde você poderá rodar o projeto tanto no android quanto no IOS. No momento o mmkv não roda no expo go.

6. **Executar Testes**

   Para executar os testes:

   ```bash
   npm test
   ```

   Para coletar o code coverage:

   ```bash
   npm run coverage
   ```

### Code coverage:

<p align="center">
  <img height="400px" src="https://i.imgur.com/xt4viSQ.png" />
</p>

### Considerações finais:

Não foi preciso utilizar gerenciamento de estados como context api, redux, zusand. Por ser um projeto simples, apenas utilizei o mmkv com react query para gerenciar os dados da aplicação, não precisando de uma biblioteca específica.

#### Projetos onde utilizei:

Context api:
`https://github.com/ovinidev/ChartsView`

`https://github.com/ovinidev/TailwindIgnite`

Redux toolkit:
`https://github.com/ovinidev/ReactPlayer`
