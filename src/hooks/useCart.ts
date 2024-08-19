import { useAddCart, useDeleteCart } from "@mutations/cart";
import { useGetCart } from "@queries/cart";

export const useCart = () => {
	const { data } = useGetCart();
	const { mutate: addToCart } = useAddCart();
	const { mutate: deleteFromCart } = useDeleteCart();

	return {
		addToCart,
		deleteFromCart,
		data,
	};
};
