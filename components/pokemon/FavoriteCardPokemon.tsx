import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
	pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid xs={6} sm={6} md={2} xl={1} onClick={onFavoriteClicked}>
			<Card
				isHoverable
				css={{ padding: 10, cursor: "pointer" }}
				
			>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width="100%"
					height={140}
				/>
			</Card>
		</Grid>
	);
};
