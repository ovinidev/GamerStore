import { CartItem } from "@components/CartItem";
import { Header } from "@components/Header";
import { useCart } from "@hooks/useCart";
import { FlatList, Text, View } from "react-native";

export default function Cart() {
	const { data } = useCart();
	const isEmpty = data?.cart.length === 0;

	return (
		<View className="flex-1 bg-slate-950 p-6">
			<Header />

			{isEmpty && (
				<Text className="self-start font-normal text-slate-100 text-xl">
					O carrinho de compras está vazio
				</Text>
			)}

			<FlatList
				data={data?.cart}
				keyExtractor={(item) => item.id.toString()}
				numColumns={1}
				renderItem={({ item }) => <CartItem data={item} />}
				ItemSeparatorComponent={() => <View className="h-4" />}
			/>

			<View className="mt-4 flex flex-row items-center justify-between bg-primary p-2">
				<Text className="font-semibold text-slate-100 text-xl">
					Total: R$ {data?.totalPrice}
				</Text>
			</View>
		</View>
	);
}
