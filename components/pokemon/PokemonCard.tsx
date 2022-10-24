import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from 'next/router';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const { id, name, img } = pokemon;
    const router = useRouter();

    const onClick = ()=> {
        router.push(`/name/${name}`)
    }
	return (
		<Grid xs={6} sm={3} md={2} xl={1} >
			<Card isHoverable css={{ cursor: "pointer" }} >
				<Card.Body css={{ p: 1 }} onClick={onClick}>
					<Card.Image src={img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
