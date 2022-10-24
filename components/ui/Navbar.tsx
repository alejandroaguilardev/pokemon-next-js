import Image from "next/image";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0 20px",
				backgroundColor: theme?.colors.gray100.value,
			}}
		>
			<div>
				<NextLink href="/" passHref>
					<Link>
						<Image
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
							alt="Icono"
							width={70}
							height={70}
						/>

						<Text color="white" h2>
							P
						</Text>
						<Text color="white" h3>
							okémon
						</Text>
						<Spacer
							css={{
								flex: 1,
							}}
						/>
					</Link>
				</NextLink>
			</div>
			<div>
				<NextLink href="/favorites">
					<Link>
						<Text color="white">Favoritos</Text>
					</Link>
				</NextLink>
			</div>
		</div>
	);
};
