import { addCarts, deleteCart } from "@api/cart";
import { CARTS } from "@constants/entities";
import { Game } from "@interfaces/games";
import { queryClient } from "@services/queryClient";
import { useMutation } from "@tanstack/react-query";

export const useAddCart = () => {
	return useMutation({
		mutationFn: (data: Game) => addCarts(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
		},
		onError: (err: any) => {
			console.log({ title: err.response.data.message });
		},
	});
};

export const useDeleteCart = () => {
	return useMutation({
		mutationFn: (id: number) => deleteCart(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
		},
		onError: (err: any) => {
			console.log({ title: err.response.data.message });
		},
	});
};
