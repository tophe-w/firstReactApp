import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  const selectedPokemon = pokemonList[0];
  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={selectedPokemon}/>
    </div>
  );
}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

export default App;
