# Documentação do Projeto

O código é um backend simples para uma aplicação TocaPlay.
Utiliza o framework Express para definir rotas e manipular as requisições HTTP.

O express.json() é um middleware do Express que permite a análise do corpo das requisições como JSON.

===========================================================================


## Rotas:

Rota: '/'<br />
Método: GET<br />
Descrição: Retorna uma mensagem “Backend TocaPlay”.<br />
Resposta de Sucesso: JSON com a mensagem.<br />
<br />
Rota: '/playlists'<br />
Método: GET<br />
Descrição: Retorna todas as playlists públicas.<br />
Resposta de Sucesso: JSON com as playlists públicas.<br />
<br />
Rota: '/usuarios'<br />
Método: GET<br />
Descrição: Retorna todos os usuários.<br />
Resposta de Sucesso: JSON com os usuários.<br />
<br />
Rota: '/playlistsPrivadas'<br />
Método: GET<br />
Descrição: Retorna todas as playlists privadas.<br />
Resposta de Sucesso: JSON com as playlists privadas.<br />
<br />
Rota: '/playlists/:id'<br />
Método: GET<br />
Descrição: Retorna os detalhes de uma playlist pública com base no ID fornecido.<br />
Parâmetro de URL: id (ID da playlist)<br />
Resposta de Sucesso: JSON com os detalhes da playlist.<br />
<br />
Rota: '/usuarios'<br />
Método: POST<br />
Descrição: Cadastra um novo usuário.<br />
Parâmetros:<br />
req.body: Objeto contendo os dados do novo usuário (nome, email, senha).<br />
Resposta de Sucesso: JSON contendo os dados do novo usuário cadastrado.<br />
<br />
Rota: '/usuarios'<br />
Método: GET<br />
Descrição: Realiza o login do usuário.<br />
Parâmetros:<br />
    email (query parameter): O email do usuário.<br />
senha (query parameter): A senha do usuário.<br />
Resposta de Sucesso: JSON contendo os dados do usuário logado.<br />
<br />
Rota: '/usuarios/:id'<br />
Método: PATCH<br />
Descrição: Edita o perfil de um usuário com base no ID fornecido.<br />
Parâmetro de URL: id (ID do usuário)<br />
Corpo da Requisição: JSON com as propriedades nome, email e/ou senha a serem atualizadas.<br />
Resposta de Sucesso: JSON com o perfil do usuário atualizado.<br />
<br />
Rota: '/usuarios/:id/playlists'<br />
Método: POST<br />
Descrição: Cria uma nova playlist privada para um usuário com base no ID fornecido.<br />
Parâmetro de URL: id (ID do usuário)<br />
Corpo da Requisição: JSON com as propriedades nome e musicas da nova playlist.<br />
Resposta de Sucesso: JSON com as playlists privadas atualizadas.<br />
<br />
Rota: '/musicas'<br />
Método: GET<br />
Descrição: Busca músicas com base no nome fornecido.<br />
Parâmetros de Consulta: nome (nome da música)<br />
Resposta de Sucesso: JSON com as músicas filtradas.<br />
<br />
Rota: '/usuarios/:id/playlists/:playlistId'<br />
Método: PATCH<br />
Descrição: Edita uma playlist privada de um usuário com base no ID da playlist e no ID do usuário fornecidos.<br />
Parâmetros de URL: id (ID do usuário), playlistId (ID da playlist)<br />
Corpo da Requisição: JSON com as propriedades nome e/ou musicas a serem atualizadas na playlist.<br />
Resposta de Sucesso: JSON com a playlist privada atualizada.<br />
<br />
Rota: '/'<br />
Método: LISTEN<br />
Descrição: Inicia o servidor e imprime a porta em que está rodando.<br />
O servidor é iniciado na porta 3001.<br />

