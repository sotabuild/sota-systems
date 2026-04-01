# SOTA Systems: Sistemas para Hotelaria de Alto Padrão

![SOTA Logo](/client/public/assets/logo.png)

## 🚀 Visão Geral

O SOTA Systems é uma plataforma modular inovadora, projetada para transformar a gestão hoteleira e elevar a experiência do hóspede a um novo nível. Combinando reservas inteligentes, gestão completa e personalização da jornada do hóspede, o SOTA oferece uma solução flexível onde você escolhe os módulos que melhor se adaptam às necessidades da sua operação.

Este projeto foi desenvolvido com uma stack moderna, incluindo React, TypeScript, TailwindCSS e Framer Motion para uma interface de usuário dinâmica e responsiva.

## ✨ Funcionalidades Principais

*   **Página Inicial Interativa**: Uma experiência de usuário envolvente com efeitos de scroll que destacam a proposta de valor do SOTA Systems.
*   **Módulos Flexíveis**: Explore um portfólio de módulos independentes, cada um projetado para uma área específica da gestão hoteleira (e.g., Reservas, Gestão de Hóspedes, Marketing).
*   **Planos de Preço Adaptáveis**: Escolha entre diferentes planos que se ajustam ao tamanho e às necessidades do seu negócio, com opções de faturamento mensal ou anual.
*   **Design Elegante e Responsivo**: Uma interface de usuário moderna e intuitiva, otimizada para diversos dispositivos.

## 🛠️ Como Começar (Setup Local)

Para configurar e rodar o projeto SOTA Systems localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

*   **Node.js**: Versão 18 ou superior. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
*   **pnpm**: Um gerenciador de pacotes rápido e eficiente. Instale-o globalmente com `npm install -g pnpm`.
*   **Git**: Para clonar o repositório. Baixe em [git-scm.com](https://git-scm.com/).

### Instalação

1.  **Clone o repositório**: 
    ```bash
    git clone https://github.com/sotabuild/sota-systems.git
    cd sota-systems
    ```

2.  **Instale as dependências**: 
    ```bash
    pnpm install
    ```

3.  **Configuração do Banco de Dados (Opcional, para desenvolvimento completo)**:
    Este projeto utiliza Drizzle ORM e MySQL. Se você planeja desenvolver funcionalidades de backend que interagem com o banco de dados, precisará configurar um ambiente MySQL.
    *   Crie um arquivo `.env` na raiz do projeto, baseado no `.env.example` (se disponível), e configure as variáveis de ambiente do banco de dados.
    *   Execute as migrações do banco de dados:
        ```bash
        pnpm run db:push
        ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento e a aplicação frontend:

```bash
pnpm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se configurado).

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor, siga estas diretrizes:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/minha-feature`).
3.  Faça suas alterações e commit (`git commit -m 'feat: adiciona nova funcionalidade'`).
4.  Envie para a branch (`git push origin feature/minha-feature`).
5.  Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---


