import { Stack, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { useCart } from "@hooks/useCart";

interface HeaderProps {
	title: string;
}

export const Header = ({ title }: HeaderProps) => {
	const router = useRouter();
	const { data } = useCart();

	const handleNavigate = () => {
		router.push("/cart");
	};

	return (
		<Stack.Screen
			options={{
				title,
				headerRight: () => (
					<View className="relative">
						<Feather
							onPress={handleNavigate}
							name="shopping-cart"
							size={24}
							color="white"
						/>
						{data && data.carts.length > 0 && (
							<Text className="absolute top-[-13px] right-[-6px] font-bold text-md text-white">
								{data?.carts.length}
							</Text>
						)}
					</View>
				),
			}}
		/>
	);
};
