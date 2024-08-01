import { Stack, Link, useLocalSearchParams } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { Button } from "@components/Button";
import Feather from "@expo/vector-icons/Feather";

export default function Details() {
	const params = useLocalSearchParams();

	return (
		<View className="flex flex-1 items-center bg-slate-950">
			<Stack.Screen
				options={{
					title: String(params.title),
					headerRight: () => (
						<Feather name="shopping-cart" size={24} color="white" />
					),
				}}
			/>

			<Image
				className="mt-4 h-[300] w-10/12"
				source={{ uri: String(params.image) }}
				resizeMode="cover"
			/>
		</View>
	);
}
