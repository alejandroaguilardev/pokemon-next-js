import type { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "../components";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Lista de pokemon">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemon[] = [];

	for (const pokemon of data.results) {
		const arrray = pokemon.url.split("/");
		const id = arrray[arrray.length - 2];
		pokemons.push({
			...pokemon,
			id,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		});
	}

	// const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
	// 	...poke,
	// 	id: i + 1,
	// 	img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
	// 		i + 1
	// 	}.png`,
	// }));

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
