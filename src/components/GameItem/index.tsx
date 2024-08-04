import { Button } from "@components/Button";
import { useCart } from "@hooks/useCart";
import { Game } from "@interfaces/games";
import { handleNavigateToGame } from "@utils/handleNavigateToGame";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";

interface GameItemProps {
	data: Game;
	isInTheCart: boolean;
}

export const GameItem = ({ data, isInTheCart }: GameItemProps) => {
	const router = useRouter();
	const { addToCart, deleteFromCart } = useCart();

	const handleUpdateCart = () => {
		if (!data) return;

		isInTheCart ? deleteFromCart(data.id) : addToCart(data);
	};

	return (
		<TouchableOpacity
			className="m-2 w-[170] bg-slate-900"
			accessibilityRole="button"
			accessibilityLabel={
				isInTheCart ? "Remover do carrinho" : "Adicionar ao carrinho"
			}
			onPress={() => handleNavigateToGame({ id: data.id, router })}
		>
			<Image
				className="h-[170] w-full"
				source={{ uri: data.image }}
				resizeMode="cover"
			/>
			<Text className="py-2 text-center font-semibold text-md text-slate-50">
				{data.title}
			</Text>
			<Button onPress={handleUpdateCart}>
				{isInTheCart ? "Remover" : "Adicionar"}
			</Button>
		</TouchableOpacity>
	);
};
