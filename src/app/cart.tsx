import { FlatList, Text, View } from "react-native";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { CartItem } from "@components/CartItem";

export default function Cart() {
	const { data } = useCart();

	return (
		<View className="flex-1 bg-slate-950 p-6">
			<Header title="Carrinho" />

			<FlatList
				data={data?.carts}
				keyExtractor={(item) => item.id.toString()}
				numColumns={1}
				renderItem={({ item }) => <CartItem data={item} />}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>

			<View className="mt-4 bg-primary p-2">
				<Text className="self-start font-semibold text-2xl text-slate-100">
					Total: R$ {data?.totalPrice}
				</Text>
			</View>
		</View>
	);
}
