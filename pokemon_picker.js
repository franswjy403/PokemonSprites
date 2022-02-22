const container = document.getElementById('container');

for (let i = 1; i <= 898; i++) {
    const pokemonContainer = document.createElement('div');
    const pokemonId = document.createElement('span');
    pokemonId.innerText = `#${i}`;
    const newSprites = document.createElement('img');
    newSprites.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemonContainer.appendChild(newSprites);
    pokemonContainer.appendChild(pokemonId);
    container.appendChild(pokemonContainer);
}