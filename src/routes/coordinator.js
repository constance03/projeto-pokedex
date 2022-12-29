export const goToPokemonsListPage = (navigate) => {
  navigate("/");
};

//passing the id parameter to function to acess the right pokemon details page (using id)
export const goToPokemonDetailPage = (navigate, id) => {
  navigate(`/details/${id}`);
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
