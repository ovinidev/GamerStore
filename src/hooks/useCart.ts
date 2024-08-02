import { useAddCart, useDeleteCart } from "@mutations/cart";
import { useGetCart } from "@queries/cart";

export const useCart = () => {
	const { data } = useGetCart();
	const { mutateAsync: addToCart } = useAddCart();
	const { mutateAsync: deleteFromCart } = useDeleteCart();

	return {
		addToCart,
		deleteFromCart,
		data,
	};
};
