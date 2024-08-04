import Feather from "@expo/vector-icons/Feather";
import { useCart } from "@hooks/useCart";
import { Game } from "@interfaces/games";
import { handleNavigate } from "@utils/handleNavigate";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
	data: Game;
}

export const CartItem = ({ data }: CartItemProps) => {
	const { deleteFromCart } = useCart();
	const router = useRouter();

	return (
		<TouchableOpacity
			testID="cart-item-touchable"
			onPress={() => handleNavigate({ id: data.id, router })}
			className="flex w-full flex-row items-center justify-between rounded-md bg-slate-900 p-1"
		>
			<View className="flex flex-row items-center gap-3">
				<Image height={65} width={65} source={{ uri: data.image }} />

				<View className="flex gap-2">
					<Text className="text-slate-50 text-xl">{data.title}</Text>

					<Text className="self-start font-semibold text-slate-100 text-xl">
						R$ {data.price}
					</Text>
				</View>
			</View>

			<Feather
				testID="cart-item-delete-icon"
				onPress={() => deleteFromCart(data.id)}
				name="trash"
				size={24}
				className="mr-1"
				color="white"
			/>
		</TouchableOpacity>
	);
};
