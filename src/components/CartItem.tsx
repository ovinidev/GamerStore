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
		<View className="flex w-full flex-row items-center justify-between rounded-md bg-slate-900 p-3">
			{/* TODO: Colocar imagem do item */}

			<View className="flex gap-2">
				<Text className="text-slate-50 text-xl">{data.title}</Text>

				<Text className="self-start font-semibold text-slate-100 text-xl">
					R$ {data.price}
				</Text>
			</View>

			<Feather
				onPress={() => deleteFromCart(data.id)}
				name="trash"
				size={24}
				color="white"
			/>
		</View>
	);
};
