import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import { Button } from "@components/Button";
import { Game } from "@interfaces/games";
import { useAddCart, useDeleteCart } from "@mutations/cart";

interface GameItemProps {
	data: Game;
	isInTheCart: boolean;
}

export const GameItem = ({ data, isInTheCart }: GameItemProps) => {
	const router = useRouter();
	const { mutateAsync: addCart } = useAddCart();
	const { mutateAsync: deleteCart } = useDeleteCart();

	const handleUpdateCart = () => {
		if (isInTheCart) {
			deleteCart(data.id);
			return;
		}

		addCart(data);
	};

	const handleNavigate = (id: number) => {
		router.push(`/${id}`);
		router.setParams({
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
