import { NoFavorites, FavoritePokemon, Layout } from "../../components";
import { useState, useEffect } from "react";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
	const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

	const onClick = () => {};

	useEffect(() => {
		setFavoritesPokemon(localFavorites.pokemons());
	}, []);

	return (
		<Layout title="Pokémon -Favoritos">
			{favoritesPokemon.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritePokemon pokemons={favoritesPokemon} />
			)}
		</Layout>
	);
};

export default FavoritesPage;
