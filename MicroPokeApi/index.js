const express = require('express');
const cors = require('cors');
const { getSprites, getStats, getMoves, getTypes } = require('./funcs.js');
const app = express();
app.set('json spaces', 2);
app.use(cors());{
  
}
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({status: 'ok'});
});

app.get('/pokemon/:nombre', async (req, res) => {
  try {
    const { nombre } = req.params;

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!respuesta.ok) {
      return res.status(404).json({ error: 'Pokémon no encontrado' });
    }

    const data = await respuesta.json();
    const sprites = getSprites(data.sprites);
    const types = getTypes(data.types);
    const stats = getStats(data.stats);
    const moves = getMoves(data.moves);

    const pokemonSimplificado = {
        nombre: data.name,
        height: data.height,
        weight: data.weight,
        sprites: sprites,
        types: types,
        stats: stats,
        moves: moves
    };

    // console.log(basics);

    res.json(pokemonSimplificado);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: {error} });
  }
});

app.get('/dragon/:nombre', async(req, res) => {
  const { nombre } = req.params;

  const respuesta = await fetch(`https://dragonball-api.com/api/characters?name=${nombre}`);

  if (!respuesta.ok) {
    return res.status(404).json({ error: 'Personaje no encontrado' });
  }

  const data = await respuesta.json();
  const character = data[0];
  

  const datacharacter = {
    name: character.name,
    race: character.race,
    gender: character.gender,
    ki: character.ki,
    image: character.image
  }

  res.json(datacharacter);
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Microservicio de tareas corriendo en http://localhost:${PORT}`);
});