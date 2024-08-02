import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import { Button } from "@components/Button";
import { Game } from "@interfaces/games";
import { useCart } from "@hooks/useCart";

interface GameItemProps {
	data: Game;
	isInTheCart: boolean;
}

export const GameItem = ({ data, isInTheCart }: GameItemProps) => {
	const router = useRouter();
	const { addToCart, deleteFromCart } = useCart();

	const handleUpdateCart = () => {
		if (isInTheCart) {
			deleteFromCart(data.id);
			return;
		}

		addToCart(data);
	};

	const handleNavigate = (id: number) => {
		router.push(`/${id}`);
		router.setParams({
			id: data.id,
			title: data.title,
			platform: data.platform,
			image: data.image,
			genre: data.genre,
			release_date: data.release_date,
			price: data.price,
		});
	};

	return (
		<TouchableOpacity
			className="m-2 w-[165] bg-slate-900"
			onPress={() => handleNavigate(data.id)}
		>
			<Image
				className="h-[165] w-full"
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
