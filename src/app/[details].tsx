import { Button } from "@components/Button";
import { DetailsItem } from "@components/DetailsItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { useGameById } from "@queries/games";
import { isGameInCart } from "@utils/isGameInCart";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Details() {
	const params = useLocalSearchParams();

	const { data, addToCart, deleteFromCart } = useCart();
	const { data: game } = useGameById(Number(params.id));

	const isInTheCart = isGameInCart({ data, gameId: Number(params.id) });

	const handleUpdateCart = (id: number) => {
		if (!game) return;

		isInTheCart ? deleteFromCart(id) : addToCart(game);
	};

	const dateFormattedToBrazilianFormat = game?.release_date
		? new Date(game.release_date).toLocaleDateString("pt-BR")
		: "";

	return (
		<View className="flex flex-1 items-start gap-2 bg-slate-950 px-6">
			<Header />

			<Text className="my-2 self-center font-bold text-3xl text-slate-50">
				{game?.title}
			</Text>

			{game?.image && (
				<Image
					className="h-[300] w-full"
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
			<DetailsItem label="Lançamento" value={dateFormattedToBrazilianFormat} />

			<Button onPress={() => handleUpdateCart(Number(params.id))}>
				{isInTheCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
			</Button>
		</View>
	);
}
