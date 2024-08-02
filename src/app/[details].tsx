import { Button } from "@components/Button";
import { DetailsItem } from "@components/DetailsItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { useGameById } from "@queries/games";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";

export default function Details() {
	const params = useLocalSearchParams();

	const { data, addToCart, deleteFromCart } = useCart();
	const { data: game } = useGameById(Number(params.id));

	const cartSelected = data?.carts.find(
		(cart) => cart.id === Number(params.id),
	);

	const isInTheCart = !!cartSelected;

	const handleUpdateCart = (id: number) => {
		if (isInTheCart) {
			deleteFromCart(id);
			return;
		}

		if (!game) return;

		addToCart(game);
	};

	return (
		<View className="flex flex-1 items-start gap-2 bg-slate-950 px-6">
			<Header title={game?.title ? game?.title : ""} />

			{game?.image && (
				<Image
					className="mt-4 h-[300] w-full"
					source={{ uri: game.image }}
					resizeMode="cover"
				/>
			)}

			<DetailsItem value={game?.description ? game.description : ""} />
			<DetailsItem label="Gênero" value={game?.genre ? game.genre : ""} />
			<DetailsItem
				label="Plataformas"
				value={game?.platform ? game.platform : ""}
			/>
			<DetailsItem label="Preço" value={game?.price ? `R$${game.price}` : ""} />
			<DetailsItem
				label="Lançamento"
				value={game?.release_date ? game.release_date : ""}
			/>

			<Button onPress={() => handleUpdateCart(Number(params.id))}>
				{isInTheCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
			</Button>
		</View>
	);
}
