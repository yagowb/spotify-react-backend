const express = require('express');
const app = express();


app.use(express.json());


const playlists = [
  {
    id: 1,
    nome: "Adele",
    capa: "../images/1.jpg",
    backgroundImage: "../images/Adele.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Adele",
        nome: "Set Fire to the Rain",
        track: "../sounds/Adele_Set_fire_to_the_rain.mp3"
      },
      {
        id: 2,
        cantor: "Adele",
        nome: "Easy On Me",
        track: "../sounds/Adele_Easy_On_Me.mp3"
      },
      {
        id: 3,
        cantor: "Adele",
        nome: "Hello",
        track: "../sounds/Adele_Hello.mp3"
      },
      {
        id: 4,
        cantor: "Adele",
        nome: "Someone Like You",
        track: "../sounds/Adele_Someone_Like_You.mp3"
      },
      {
        id: 5,
        cantor: "Adele",
        nome: "Rolling in the Deep",
        track: "../sounds/Adele_Rolling_in_the_Deep.mp3"
      }
    ]
  },
  {
    id: 2,
    nome: "Queen",
    capa: "../images/2.jpg",
    backgroundImage: "../images/Queen.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Queen",
        nome: "Bohemian Rhapsody",
        track: "../sounds/Queen_Bohemian_Rhapsody.mp3"
      },
      {
        id: 2,
        cantor: "Queen",
        nome: "I Want to Break Free",
        track: "../sounds/Queen_I_want_to_Break_Free.mp3"
      },
      {
        id: 3,
        cantor: "Queen",
        nome: "Love Of My Life",
        track: "../sounds/Queen_Love_Of_My_Life.mp3"
      },
      {
        id: 4,
        cantor: "Queen",
        nome: "Radio Ga Ga",
        track: "../sounds/Queen_Radio_Ga_Ga.mp3"
      },
      {
        id: 5,
        cantor: "Queen",
        nome: "We Are The Champions",
        track: "../sounds/Queen_We_Are_The_Champions.mp3"
      }
    ]
  },
  {
    id: 3,
    nome: "Coldplay",
    capa: "../images/3.jpg",
    backgroundImage: "../images/Coldplay.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Coldplay",
        nome: "Viva La Vida",
        track: "../sounds/Coldplay_VivaLaVida.mp3"
      },
      {
        id: 2,
        cantor: "ColdPlay",
        nome: "Yellow",
        track: "../sounds/Coldplay_Yellow.mp3"
      },
      {
        id: 3,
        cantor: "ColdPlay",
        nome: "Paradise",
        track: "../sounds/Coldplay_Paradise.mp3"
      },
      {
        id: 4,
        cantor: "ColdPlay",
        nome: "Clocks",
        track: "../sounds/Coldplay_Clocks.mp3"
      },
      {
        id: 5,
        cantor: "ColdPlay",
        nome: "The Scientist",
        track: "../sounds/Coldplay_The_Scientist.mp3"
      }
    ]
  },
  {
    id: 4,
    nome: "The Beatles",
    capa: "../images/4.jpg",
    backgroundImage: "../images/TheBeatles.jpg",
    musicas: [
      {
        id: 1,
        cantor: "The Beatles",
        nome: "Here Comes he Sun",
        track: "../sounds/The_Beatles_HereComesTheSun.mp3"
      },
      {
        id: 2,
        cantor: "The Beatles",
        nome: "Help!",
        track: "../sounds/The_Beatlhes_Help.mp3"
      },
      {
        id: 3,
        cantor: "The Beatles",
        nome: "Ticket to Ride",
        track: "../sounds/The_Beatlhes_Ticket_To_Ride.mp3"
      },
      {
        id: 4,
        cantor: "The Beatles",
        nome: "Yesteday",
        track: "../sounds/The_Beatlhes_Yesteday.mp3"
      },
      {
        id: 5,
        cantor: "The Beatles",
        nome: "Dont Let Me Down",
        track: "../sounds/The_Beatlhes_Dont_Let_Me_Down.mp3"
      }
    ]
  },
  {
    id: 5,
    nome: "Michael Jackson",
    capa: "../images/5.jpg",
    backgroundImage: "../images/MichaelJackson.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Michael Jackson",
        nome: "Billie Jean",
        track: "../sounds/Michael_Jackson_BillieJean.mp3"
      },
      {
        id: 2,
        cantor: "Michael Jackson",
        nome: "Thriller",
        track: "../sounds/Michael_Jackson_Thriller.mp3"
      },
      {
        id: 3,
        cantor: "Michael Jackson",
        nome: "Dont Stop Til You Get Enough",
        track: "../sounds/Michael_Jackson_Dont_Stop_Til_You_Get_Enough.mp3"
      },
      {
        id: 4,
        cantor: "Michael Jackson",
        nome: "They Dont Care About Us",
        track: "../sounds/Michael_Jackson_They_Dont_Care_About_Us.mp3"
      },
      {
        id: 5,
        cantor: "Michael Jackson",
        nome: "Will You Be There",
        track: "../sounds/Michael_Jackson_Will_You_Be_There.mp3"
      }
    ]
  },
  {
    id: 6,
    nome: "Seu Jorge",
    capa: "../images/6.jpg",
    backgroundImage: "../images/SeuJorge.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Seu Jorge",
        nome: "Amiga da Minha Mulher",
        track: "../sounds/Seu_Jorge_Amiga_da_minha_mulher.mp3"
      },
      {
        id: 2,
        cantor: "Seu Jorge",
        nome: "Burguesinha",
        track: "../sounds/Seu_Jorge_Burguesinha.mp3"
      },
      {
        id: 3,
        cantor: "Seu Jorge",
        nome: "Mina do Condomínio",
        track: "../sounds/Seu_Jorge_Mina_Do_Condomínio.mp3"
      },
      {
        id: 4,
        cantor: "Seu Jorge",
        nome: "Quem Não Quer Sou Eu",
        track: "../sounds/Seu_Jorge_Quem_Não_Quer_Sou_Eu.mp3"
      },
      {
        id: 5,
        cantor: "Seu Jorge",
        nome: "São Gonça",
        track: "../sounds/Seu_Jorge_Amiga_São_Gonça.mp3"
      }
    ]
  },
  {
    id: 7,
    nome: "Avicii",
    capa: "../images/7.jpg",
    backgroundImage: "../images/Avicii.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Avicii",
        nome: "The Nights",
        track: "../sounds/Avicii_The_Nights.mp3"
      },
      {
        id: 2,
        cantor: "Avicii",
        nome: "Hey Brother",
        track: "../sounds/Avicii_Hey_Brother.mp3"
      },
      {
        id: 3,
        cantor: "Avicii",
        nome: "Levels",
        track: "../sounds/Avicii_Levels.mp3"
      },
      {
        id: 4,
        cantor: "Avicii",
        nome: "Waiting For Love",
        track: "../sounds/Avicii_Waiting_For_Love.mp3"
      },
      {
        id: 5,
        cantor: "Avicii",
        nome: "Wake Me Up",
        track: "../sounds/Avicii_Wake_Me_Up.mp3"
      }
    ]
  },
  {
    id: 8,
    nome: "Imagine Dragons",
    capa: "../images/8.jpg",
    backgroundImage: "../images/ImagineDragons.jpg",
    musicas: [
      {
        id: 1,
        cantor: "Imagine Dragons",
        nome: "Bones",
        track: "../sounds/Imagine_Dragons_Bones.mp3"
      },
      {
        id: 2,
        cantor: "Imagine Dragons",
        nome: "Demons",
        track: "../sounds/Imagine_Dragons_Demons.mp3"
      },
      {
        id: 3,
        cantor: "Imagine Dragons",
        nome: "Its Time",
        track: "../sounds/Imagine_Dragons_Its_Time.mp3"
      },
      {
        id: 4,
        cantor: "Imagine Dragons",
        nome: "Thunder",
        track: "../sounds/Imagine_Dragons_Thunder.mp3"
      },
      {
        id: 5,
        cantor: "Imagine Dragons",
        nome: "Not Today from me Before You",
        track: "../sounds/Imagine_Dragons_Not_Today_from_me_Before_You.mp3"
      }
    ]
  }
]

const usuarios = [
  {
    nome: "Andre28ap",
    email: "andre28ap@gmail.com",
    senha: "1234",
    id: 1
  },
  {
    nome: "daniel37",
    email: "d37@d.com",
    senha: "123123",
    id: 2
  },
  {
    nome: "Yago",
    email: "abba@bol.com",
    senha: "123405",
    id: 3
  },
  {
    nome: "Yago",
    email: "yago@bol.com",
    senha: "espada",
    id: 4
  }
]

const musicas = [
  {
    id: 1,
    cantor: "Adele",
    nome: "Set Fire to the Rain",
    track: "../sounds/Adele_Set_fire_to_the_rain.mp3"
  },
  {
    id: 2,
    cantor: "Adele",
    nome: "Easy On Me",
    track: "../sounds/Adele_Easy_On_Me.mp3"
  },
  {
    id: 3,
    cantor: "Adele",
    nome: "Hello",
    track: "../sounds/Adele_Hello.mp3"
  },
  {
    id: 4,
    cantor: "Adele",
    nome: "Someone Like You",
    track: "../sounds/Adele_Someone_Like_You.mp3"
  },
  {
    id: 5,
    cantor: "Adele",
    nome: "Rolling in the Deep",
    track: "../sounds/Adele_Rolling_in_the_Deep.mp3"
  },
  {
    id: 6,
    cantor: "Queen",
    nome: "Bohemian Rhapsody",
    track: "../sounds/Queen_Bohemian_Rhapsody.mp3"
  },
  {
    id: 7,
    cantor: "Queen",
    nome: "I Want to Break Free",
    track: "../sounds/Queen_I_want_to_Break_Free.mp3"
  },
  {
    id: 8,
    cantor: "Queen",
    nome: "Love Of My Life",
    track: "../sounds/Queen_Love_Of_My_Life.mp3"
  },
  {
    id: 9,
    cantor: "Queen",
    nome: "Radio Ga Ga",
    track: "../sounds/Queen_Radio_Ga_Ga.mp3"
  },
  {
    id: 10,
    cantor: "Queen",
    nome: "We Are The Champions",
    track: "../sounds/Queen_We_Are_The_Champions.mp3"
  },
  {
    id: 11,
    cantor: "Coldplay",
    nome: "Viva La Vida",
    track: "../sounds/Coldplay_VivaLaVida.mp3"
  },
  {
    id: 12,
    cantor: "ColdPlay",
    nome: "Yellow",
    track: "../sounds/Coldplay_Yellow.mp3"
  },
  {
    id: 13,
    cantor: "ColdPlay",
    nome: "Paradise",
    track: "../sounds/Coldplay_Paradise.mp3"
  },
  {
    id: 14,
    cantor: "ColdPlay",
    nome: "Clocks",
    track: "../sounds/Coldplay_Clocks.mp3"
  },
  {
    id: 15,
    cantor: "ColdPlay",
    nome: "The Scientist",
    track: "../sounds/Coldplay_The_Scientist.mp3"
  },
  {
    id: 16,
    cantor: "The Beatles",
    nome: "Here Comes he Sun",
    track: "../sounds/The_Beatles_HereComesTheSun.mp3"
  },
  {
    id: 17,
    cantor: "The Beatles",
    nome: "Help!",
    track: "../sounds/The_Beatlhes_Help.mp3"
  },
  {
    id: 18,
    cantor: "The Beatles",
    nome: "Ticket to Ride",
    track: "../sounds/The_Beatlhes_Ticket_To_Ride.mp3"
  },
  {
    id: 19,
    cantor: "The Beatles",
    nome: "Yesteday",
    track: "../sounds/The_Beatlhes_Yesteday.mp3"
  },
  {
    id: 20,
    cantor: "The Beatles",
    nome: "Dont Let Me Down",
    track: "../sounds/The_Beatlhes_Dont_Let_Me_Down.mp3"
  },
  {
    id: 21,
    cantor: "Michael Jackson",
    nome: "Billie Jean",
    track: "../sounds/Michael_Jackson_BillieJean.mp3"
  },
  {
    id: 22,
    cantor: "Michael Jackson",
    nome: "Thriller",
    track: "../sounds/Michael_Jackson_Thriller.mp3"
  },
  {
    id: 23,
    cantor: "Michael Jackson",
    nome: "Dont Stop Til You Get Enough",
    track: "../sounds/Michael_Jackson_Dont_Stop_Til_You_Get_Enough.mp3"
  },
  {
    id: 24,
    cantor: "Michael Jackson",
    nome: "They Dont Care About Us",
    track: "../sounds/Michael_Jackson_They_Dont_Care_About_Us.mp3"
  },
  {
    id: 25,
    cantor: "Michael Jackson",
    nome: "Will You Be There",
    track: "../sounds/Michael_Jackson_Will_You_Be_There.mp3"
  },
  {
    id: 26,
    cantor: "Seu Jorge",
    nome: "Amiga da Minha Mulher",
    track: "../sounds/Seu_Jorge_Amiga_da_minha_mulher.mp3"
  },
  {
    id: 27,
    cantor: "Seu Jorge",
    nome: "Burguesinha",
    track: "../sounds/Seu_Jorge_Burguesinha.mp3"
  },
  {
    id: 28,
    cantor: "Seu Jorge",
    nome: "Mina do Condomínio",
    track: "../sounds/Seu_Jorge_Mina_Do_Condomínio.mp3"
  },
  {
    id: 29,
    cantor: "Seu Jorge",
    nome: "Quem Não Quer Sou Eu",
    track: "../sounds/Seu_Jorge_Quem_Não_Quer_Sou_Eu.mp3"
  },
  {
    id: 30,
    cantor: "Seu Jorge",
    nome: "São Gonça",
    track: "../sounds/Seu_Jorge_Amiga_São_Gonça.mp3"
  },
  {
    id: 31,
    cantor: "Avicii",
    nome: "The Nights",
    track: "../sounds/Avicii_The_Nights.mp3"
  },
  {
    id: 32,
    cantor: "Avicii",
    nome: "Hey Brother",
    track: "../sounds/Avicii_Hey_Brother.mp3"
  },
  {
    id: 33,
    cantor: "Avicii",
    nome: "Levels",
    track: "../sounds/Avicii_Levels.mp3"
  },
  {
    id: 34,
    cantor: "Avicii",
    nome: "Waiting For Love",
    track: "../sounds/Avicii_Waiting_For_Love.mp3"
  },
  {
    id: 35,
    cantor: "Avicii",
    nome: "Wake Me Up",
    track: "../sounds/Avicii_Wake_Me_Up.mp3"
  },
  {
    id: 36,
    cantor: "Imagine Dragons",
    nome: "Bones",
    track: "../sounds/Imagine_Dragons_Bones.mp3"
  },
  {
    id: 37,
    cantor: "Imagine Dragons",
    nome: "Demons",
    track: "../sounds/Imagine_Dragons_Demons.mp3"
  },
  {
    id: 38,
    cantor: "Imagine Dragons",
    nome: "Its Time",
    track: "../sounds/Imagine_Dragons_Its_Time.mp3"
  },
  {
    id: 39,
    cantor: "Imagine Dragons",
    nome: "Thunder",
    track: "../sounds/Imagine_Dragons_Thunder.mp3"
  },
  {
    id: 40,
    cantor: "Imagine Dragons",
    nome: "Not Today from me Before You",
    track: "../sounds/Imagine_Dragons_Not_Today_from_me_Before_You.mp3"
  }
]

const playlistsPrivadas = [
  {
    id: 1,
    idUsuario: 1,
    nome: "teste7",
    musicas: [
      {
        id: 3,
        cantor: "Adele",
        nome: "Hello",
        track: "../sounds/Adele_Hello.mp3"
      },
      {
        id: 17,
        cantor: "The Beatles",
        nome: "Help!",
        track: "../sounds/The_Beatlhes_Help.mp3"
      }
    ]
  },
  {
    id: 2,
    idUsuario: 1,
    nome: "teste3",
    musicas: [
      {
        id: 21,
        cantor: "Michael Jackson",
        nome: "Billie Jean",
        track: "../sounds/Michael_Jackson_BillieJean.mp3"
      }
    ]
  },
  {
    id: 3,
    idUsuario: 1,
    nome: "teste4",
    musicas: [
      {
        id: 5,
        cantor: "Adele",
        nome: "Rolling in the Deep",
        track: "../sounds/Adele_Rolling_in_the_Deep.mp3"
      },
      {
        id: 9,
        cantor: "Queen",
        nome: "Radio Ga Ga",
        track: "../sounds/Queen_Radio_Ga_Ga.mp3"
      }
    ]
  },
  {
    id: 4,
    idUsuario: 1,
    nome: "teste5",
    musicas: [
      {
        id: 12,
        cantor: "ColdPlay",
        nome: "Yellow",
        track: "../sounds/Coldplay_Yellow.mp3"
      },
      {
        id: 14,
        cantor: "ColdPlay",
        nome: "Clocks",
        track: "../sounds/Coldplay_Clocks.mp3"
      }
    ]
  },
  {
    id: 5,
    idUsuario: 1,
    nome: "teste6",
    musicas: [
      {
        id: 23,
        cantor: "Michael Jackson",
        nome: "Dont Stop Til You Get Enough",
        track: "../sounds/Michael_Jackson_Dont_Stop_Til_You_Get_Enough.mp3"
      },
      {
        id: 26,
        cantor: "Seu Jorge",
        nome: "Amiga da Minha Mulher",
        track: "../sounds/Seu_Jorge_Amiga_da_minha_mulher.mp3"
      },
      {
        id: 27,
        cantor: "Seu Jorge",
        nome: "Burguesinha",
        track: "../sounds/Seu_Jorge_Burguesinha.mp3"
      }
    ]
  },
  {
    id: 6,
    idUsuario: 2,
    nome: "teste0",
    musicas: [
      {
        id: 14,
        cantor: "ColdPlay",
        nome: "Clocks",
        track: "../sounds/Coldplay_Clocks.mp3"
      },
      {
        id: 12,
        cantor: "ColdPlay",
        nome: "Yellow",
        track: "../sounds/Coldplay_Yellow.mp3"
      }
    ]
  },
  {
    id: 7,
    idUsuario: 3,
    nome: "músicas pop",
    musicas: [
      {
        id: 3,
        cantor: "Adele",
        nome: "Hello",
        track: "../sounds/Adele_Hello.mp3"
      },
      {
        id: 9,
        cantor: "Queen",
        nome: "Radio Ga Ga",
        track: "../sounds/Queen_Radio_Ga_Ga.mp3"
      }
    ]
  }
]

/*==============*/
/*    ROTAS     */
/*==============*/


app.get('/', (req, res) => {
  res.json('Backend TocaPlay');
})


//LISTAR TODOS OS USUÁRIOS
app.get('/usuarios/usuarios', (req, res) => {
  res.json(usuarios)
})

//LISTAR PLAYLISTS PÚBLICAS
app.get('/playlists', (req, res) => {
  res.json(playlists);
})



//LISTAR PLAYLISTS PRIVADAS
app.get('/playlistsPrivadas', (req, res) => {
  res.json(playlistsPrivadas);
})


//LISTAR DETALHES DAS PLAYLISTS PÚBLICAS
app.get('/playlists/:id', (req, res) => {
  const { id } = req.params;

  const playlist = playlists.find(item => item.id == id);

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist não Encontrado!' });
  }

  res.status(200).json(playlist);
});


//CADASTRO DE USUÁRIO
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;

  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
  if (usuarioExistente) {
    return res.status(400).json({ error: 'E-mail já cadastrado.' });
  }

  const maiorId = usuarios.reduce((max, obj) => { //eu encontro o maiorID para eu acrescentar a nova
    return obj.id > max ? obj.id : max;                   //playlistsPrivada no final do vetor
  }, 0);
  const novoId = parseInt(maiorId) + 1;//Crio o novoID para a playlistsPrivada nova

  const novoUsuario = {id: novoId, nome, email, senha};

  usuarios.push(novoUsuario);

  res.status(200).json(novoUsuario);
});


//LOGIN
app.get('/usuarios', (req, res) => {
  const { email, senha } = req.query;

  if (!email || !senha) {
    return res.status(400).json({ error: 'É necessário inserir o email e a senha.' });
  } //autenticação email e senha

  const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);
  if (!usuario) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  res.status(200).json( usuario );
});


//EDITAR PERFIL
app.patch('/usuarios/:id', (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;

  const usuarioRequisitado = usuarios.find((usuario) => usuario.id == id);
  if (!usuarioRequisitado) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  usuarioRequisitado.nome = nome || usuarioRequisitado.nome;
  usuarioRequisitado.email = email || usuarioRequisitado.email;
  usuarioRequisitado.senha = senha || usuarioRequisitado.senha;

  res.status(200).json(usuarioRequisitado);
});




//CADASTRO DAS PLAYLISTS PRIVADAS
app.post('/usuarios/:id/playlists', (req, res) => {
  const { nome, musicas } = req.body;
  const { id } = req.params;

  const usuarioRequisitado = usuarios.find((usuario) => usuario.id == id)
  if (!usuarioRequisitado) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  const maiorId = playlistsPrivadas.reduce((max, obj) => { //eu encontro o maiorID para eu acrescentar a nova
    return obj.id > max ? obj.id : max;                   //playlistsPrivada no final do vetor
  }, 0);
  const novoId = parseInt(maiorId) + 1; //Crio o novoID para a playlistsPrivada nova

  const novaPlaylist = {id: novoId, idUsuario: id, nome, musicas}
  playlistsPrivadas.push(novaPlaylist);

  res.status(200).json(playlistsPrivadas);
})



//BUSCAR MÚSICAS
app.get('/musicas', (req, res) => {
  const { nome } = req.query;

  const resultadosFiltrados = musicas.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
  if (!resultadosFiltrados) {
    return res.status(404).json({ error: 'Musica não encontrada.' });
  }

  res.status(200).json(resultadosFiltrados);

})



//EDITAR PLAYLISTS PRIVADAS
app.patch('/usuarios/:id/playlists/:playlistId', (req, res) => {
  const { nome, musicas } = req.body;
  const { id, playlistId } = req.params;

  const usuarioRequisitado = usuarios.find((usuario) => usuario.id == id);
  if (!usuarioRequisitado) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  const playlistReq = playlistsPrivadas.find((playlist) => playlist.id == playlistId);
  if (!playlistReq) {
    return res.status(404).json({ error: 'Playlist não encontrada.' });
  }

  playlistReq.nome = nome
  playlistReq.musicas = musicas;

  res.status(200).json(playlistReq);
});



//INICIANDO SERVIDOR
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});