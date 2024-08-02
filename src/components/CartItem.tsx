import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useCart } from "@hooks/useCart";
import { Game } from "@interfaces/games";

interface CartItemProps {
	data: Game;
}

export const CartItem = ({ data }: CartItemProps) => {
	const { deleteFromCart } = useCart();

	return (
		<View className="flex w-full items-center gap-2 self-center border-2 border-slate-100 p-2">
			<View className="flex w-full flex-row items-center justify-between">
				<Text className="text-slate-50 text-xl">{data.title}</Text>

				<Feather
					onPress={() => deleteFromCart(data.id)}
					name="trash"
					size={24}
					color="white"
					className="mr-2"
				/>
			</View>

			<Text className="self-start font-semibold text-2xl text-slate-100">
				R$ {data.price}
			</Text>
		</View>
	);
};
