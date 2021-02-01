const pokeDetails = ({ pokemonType, pokemonData }) =>
  pokemonData.map((data) => {
    return (
      <div className="details">
        <img src={data.sprites.front_default} />
        <div className="text">
          <p>
            #{data.id} {[...data.name][0].toUpperCase() + data.name.slice(1)}
          </p>
          <p>Type: {pokemonType}</p>
          <p>Height: {data.height / 10}m</p>
          <p>Weight: {data.weight / 10}kg</p>
        </div>
      </div>
    );
  });

export default pokeDetails;
