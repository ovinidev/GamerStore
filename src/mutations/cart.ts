import { addToCartFromApi, deleteCartFromApi } from "@api/cart";
import { CARTS } from "@constants/entities";
import { Game } from "@interfaces/games";
import { queryClient } from "@services/queryClient";
import { useMutation } from "@tanstack/react-query";

export const useAddCart = () => {
	return useMutation({
		mutationFn: (data: Game) => addToCartFromApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
		},
		onError: (err: any) => {
			console.log(err);
		},
	});
};

export const useDeleteCart = () => {
	return useMutation({
		mutationFn: (id: number) => deleteCartFromApi(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
		},
		onError: (err: any) => {
			console.log(err);
		},
	});
};
