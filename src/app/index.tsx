import { GameItem } from "@components/GameItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { useGames } from "@queries/games";
import { verifyItemInCart } from "@utils/verifyItemInCart";
import { FlatList, View } from "react-native";

export default function Home() {
	const { data: games } = useGames();
	const { data } = useCart();

	return (
		<View className="flex flex-1 items-center bg-slate-950">
			<Header />

			<FlatList
				data={games}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				renderItem={({ item }) => (
					<GameItem
						data={item}
						isInTheCart={verifyItemInCart({
							data,
							cartId: item.id,
						})}
					/>
				)}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>
		</View>
	);
}
