# Documentação do Projeto

O código é um backend simples para uma aplicação TocaPlay.
Utiliza o framework Express para definir rotas e manipular as requisições HTTP.

O express.json() é um middleware do Express que permite a análise do corpo das requisições como JSON.

================================================================================


## Rotas:


Rota: /
Método: GET
Descrição: Retorna uma mensagem "Backend TocaPlay".
Resposta de Sucesso: JSON com a mensagem.


Rota: /playlists
Método: GET
Descrição: Retorna todas as playlists públicas.
Resposta de Sucesso: JSON com as playlists públicas.

Rota: /usuarios
Método: GET
Descrição: Retorna todos os usuários.
Resposta de Sucesso: JSON com os usuários.

Rota: /playlistsPrivadas
Método: GET
Descrição: Retorna todas as playlists privadas.
Resposta de Sucesso: JSON com as playlists privadas.

Rota: /playlists/:id
Método: GET
Descrição: Retorna os detalhes de uma playlist pública com base no ID fornecido.
Parâmetro de URL: id (ID da playlist)
Resposta de Sucesso: JSON com os detalhes da playlist.

Rota: /usuarios/:id
Método: PATCH
Descrição: Edita o perfil de um usuário com base no ID fornecido.
Parâmetro de URL: id (ID do usuário)
Corpo da Requisição: JSON com as propriedades nome, email e/ou senha a serem atualizadas.
Resposta de Sucesso: JSON com o perfil do usuário atualizado.

Rota: /usuarios/:id/playlists
Método: POST
Descrição: Cria uma nova playlist privada para um usuário com base no ID fornecido.
Parâmetro de URL: id (ID do usuário)
Corpo da Requisição: JSON com as propriedades nome e musicas da nova playlist.
Resposta de Sucesso: JSON com as playlists privadas atualizadas.

Rota: /musicas
Método: GET
Descrição: Busca músicas com base no nome fornecido.
Parâmetros de Consulta: nome (nome da música)
Resposta de Sucesso: JSON com as músicas filtradas.

Rota: /usuarios/:id/playlists/:playlistId
Método: PATCH
Descrição: Edita uma playlist privada de um usuário com base no ID da playlist e no ID do usuário fornecidos.
Parâmetros de URL: id (ID do usuário), playlistId (ID da playlist)
Corpo da Requisição: JSON com as propriedades nome e/ou musicas a serem atualizadas na playlist.
Resposta de Sucesso: JSON com a playlist privada atualizada.

Rota: /
Método: GET
Descrição: Inicia o servidor e imprime a porta em que está rodando.
O servidor é iniciado na porta 3001.
