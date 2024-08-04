import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-gray-900 p-4">
			<Stack.Screen options={{ title: "Oops!" }} />
			<Text className="font-bold text-white text-xl">
				This screen doesn't exist.
			</Text>
			<Link href="/" className="mt-4 pt-4">
				<Text className="text-base text-blue-500">Go to home screen!</Text>
			</Link>
		</View>
	);
}
