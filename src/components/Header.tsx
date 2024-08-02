import Feather from "@expo/vector-icons/Feather";
import { useCart } from "@hooks/useCart";
import { Stack, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export const Header = () => {
	const router = useRouter();
	const { data } = useCart();

	const handleNavigate = () => {
		router.push("/cart");
	};

	return (
		<Stack.Screen
			options={{
				headerTitle: () => (
					<Image source={require("../assets/logo.png")} resizeMode="contain" />
				),
				headerRight: () => (
					<View className="relative flex items-center justify-center">
						<Feather
							onPress={handleNavigate}
							name="shopping-cart"
							size={24}
							color="white"
						/>
						{data && data.carts.length > 0 && (
							<Text className="absolute top-[-14px] right-[-5px] font-bold text-md text-slate-100">
								{data?.carts.length}
							</Text>
						)}
					</View>
				),
			}}
		/>
	);
};
