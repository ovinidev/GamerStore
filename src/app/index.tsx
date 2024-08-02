import { GameItem } from "@components/GameItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { Game } from "@interfaces/games";
import { useGames } from "@queries/games";
import { FlatList, View } from "react-native";

export default function Home() {
	const { data: games } = useGames();
	const { data } = useCart();

	const verifyItemInCart = (item: Game) => {
		if (data?.carts && data.carts.length > 0) {
			const cart = data.carts.find((cart) => cart.id === item.id);

			return !!cart;
		}

		return false;
	};

	return (
		<View className="flex flex-1 items-center bg-slate-950">
			<Header />

			<FlatList
				data={games}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				renderItem={({ item }) => (
					<GameItem data={item} isInTheCart={verifyItemInCart(item)} />
				)}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>
		</View>
	);
}
