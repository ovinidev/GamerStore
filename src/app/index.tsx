import { GameItem } from "@components/GameItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { useGames } from "@queries/games";
import { verifyItemInCart } from "@utils/verifyItemInCart";
import { FlatList, Text, View } from "react-native";

export default function Home() {
	const { data: games } = useGames();
	const { data } = useCart();

	const isGamesEmpty = games?.length === 0;

	return (
		<View className="flex flex-1 items-center bg-slate-950">
			<Header />

			{isGamesEmpty && (
				<Text className="mt-4 font-normal text-slate-100 text-xl">
					Lista de jogos vazia
				</Text>
			)}

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
