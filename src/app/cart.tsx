import { CartItem } from "@components/CartItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { FlatList, Text, View } from "react-native";

export default function Cart() {
	const { data } = useCart();
	const isCartEmpty = data?.carts.length === 0;

	return (
		<View className="flex-1 bg-slate-950 p-6">
			<Header />

			{isCartEmpty && (
				<Text className="self-start font-normal text-slate-100 text-xl">
					O carrinho de compras está vazio
				</Text>
			)}

			<FlatList
				data={data?.carts}
				keyExtractor={(item) => item.id.toString()}
				numColumns={1}
				renderItem={({ item }) => <CartItem data={item} />}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>

			<View className="mt-4 bg-primary p-2">
				<Text className="self-start font-semibold text-slate-100 text-xl">
					Total: R$ {data?.totalPrice}
				</Text>
			</View>
		</View>
	);
}
