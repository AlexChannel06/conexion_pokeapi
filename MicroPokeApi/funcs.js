function getSprites(data){
    const sprites = {};

    sprites.sprite1 = data.other['official-artwork'].front_default;
    sprites.sprite2 = data.other.dream_world.front_default;
    sprites.sprite3 = data.other.showdown.front_default

    return sprites;
}

function getStats(data){
    const stats = [];

    data.forEach(stat => {
        info = {}
        info.name = stat.stat.name;
        info.value = stat.base_stat;
        stats.push(info);
    });

    return stats;
}

function getMoves(data){
    const moves = [];
    let max = 0;

    max = (data.length <= 5) ? data.length : 5;

    for (let i = 0; i < max; i++){
        let move = data[i].move.name;
        moves.push(move);
    }

    return moves;
}

function getTypes(data){
    let types = [];

    data.forEach(type =>{
        let tipo = type.type.name;
        types.push(tipo)
    })

    return types;
}

module.exports = {getSprites, getStats, getMoves, getTypes};