// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Pokemoncard(props: any) {
  console.log(props.pokemon);

  const { pokemon } = props;

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default Pokemoncard;
