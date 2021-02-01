const Form = ({ pokemon, setPokemon, getPokemon }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      getPokemon(pokemon);
    }}
  >
    <input
      type="text"
      onChange={(e) => {
        setPokemon(e.target.value.toLowerCase());
      }}
      placeholder="Enter pokemon name"
    />
    <button>Search</button>
  </form>
);

export default Form;
