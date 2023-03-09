# Store Manager Project

Este é um projeto de gerenciamento de loja construído com Node.js, Arquitetura de Software com o MSC, testes unitários e o MySQL como banco de dados. O aplicativo permite que os usuários gerenciem os produtos e as vendas de uma loja, visualizando, adicionando, editando e removendo produtos e vendas.

## Como funciona

O aplicativo é construído com Node.js e utiliza o banco de dados MySQL para armazenar os dados dos produtos e vendas. Além disso, o aplicativo possui uma API RESTful para interagir com os usuários.

## Gerenciando Vendas

Na aplicação, será possível realizar as seguintes ações:

--> <i>POST /sales</i>: Adicionar uma nova venda.

--> <i>GET /sales</i>: Listar todas as vendas.

--> <i>GET /sales/:id</i>: Retornar as informações detalhadas sobre uma venda específica por meio do id da venda.

--> <i>PUT /sales/:id</i>: Atualizar as informações de uma venda específico.

--> <i>DELETE /sales/:id</i>: Remover uma venda.

## Gerenciando produtos

Na aplicação, será possível realizar as seguintes ações:

--> <i>POST /products</i>: Adicionar um novo produto à loja.

--> <i>GET /products</i>: Listar todos os produtos da loja.

--> <i>GET /products/:id</i>: Retornar as informações detalhadas sobre um produto específico por meio do id do produto.

--> <i>PUT /products/:id</i>: Atualizar as informações de um produto específico.

--> <i>DELETE /products/:id</i>: Remover um produto da loja.

## Conclusão

Este projeto de gerenciamento de loja é um exemplo simples de como o Node.js, o MySQL e uma API RESTful podem ser usados juntos para criar um aplicativo funcional e escalável. O uso da API torna fácil interagir com o aplicativo e gerenciar os dados da loja.

_________________________________________________________________________________________________________________________________________________________

# Store Manager Project

This is a store management project built with Node.js, Software Architecture with MSC, unit tests and MySQL as database. The app allows users to manage a store's products and sales by viewing, adding, editing and removing products and sales.

## How it works

The application is built with Node.js and uses the MySQL database to store product and sales data. Furthermore, the app has a RESTful API to interact with users.

## Managing Sales

In the application, you can perform the following actions:

--> <i>POST /sales</i>: Add a new sale.

--> <i>GET /sales</i>: List all sales.

--> <i>GET /sales/:id</i>: Return detailed information about a specific sale via the sales id.

--> <i>PUT /sales/:id</i>: Update information for a specific sale.

--> <i>DELETE /sales/:id</i>: Remove a sale.

## Managing products

In the application, you can perform the following actions:

--> <i>POST /products</i>: Add a new product to the store.

--> <i>GET /products</i>: List all products in the store.

--> <i>GET /products/:id</i>: Return detailed information about a specific product via the product id.

--> <i>PUT /products/:id</i>: Update information for a specific product.

--> <i>DELETE /products/:id</i>: Remove a product from the store.

## Conclusion

This store management project is a simple example of how Node.js, MySQL and a RESTful API can be used together to create a functional and scalable application. Using the API makes it easy to interact with the app and manage store data.
