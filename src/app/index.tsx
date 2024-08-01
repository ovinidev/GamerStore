import { Stack } from "expo-router";
import { FlatList, View } from "react-native";
import { Button } from "@components/Button";
import Feather from "@expo/vector-icons/Feather";
import { useGames } from "@queries/games";
import { GameItem } from "@components/GameItem";

export default function Home() {
	const { data: games } = useGames();

	return (
		<View className="flex flex-1 items-center bg-slate-950">
			<Stack.Screen
				options={{
					title: "Game Store",
					headerRight: () => (
						<Feather name="shopping-cart" size={24} color="white" />
					),
				}}
			/>

			<FlatList
				data={games}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				renderItem={({ item }) => <GameItem data={item} isInTheCart />}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>
		</View>
	);
}
