import { addGameToStorageCart, deleteCartFromStorage } from "@api/cart";
import { CARTS } from "@constants/entities";
import { useToast } from "@hooks/useToast";
import { Game } from "@interfaces/games";
import { queryClient } from "@services/queryClient";
import { useMutation } from "@tanstack/react-query";

export const useAddCart = () => {
	const { handleShowToastMessage } = useToast();

	return useMutation({
		mutationFn: (data: Game) => addGameToStorageCart(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
			handleShowToastMessage({
				type: "success",
				text: "Item adicionado ao carrinho com sucesso",
			});
		},
		onError: () => {
			handleShowToastMessage({
				type: "error",
				text: "Houve um erro ao adicionar o item",
			});
		},
	});
};

export const useDeleteCart = () => {
	const { handleShowToastMessage } = useToast();

	return useMutation({
		mutationFn: (id: number) => deleteCartFromStorage(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [CARTS] });
			handleShowToastMessage({
				type: "success",
				text: "Item removido do carrinho som sucesso",
			});
		},
		onError: () => {
			handleShowToastMessage({
				type: "error",
				text: "Houve um erro ao deletar o item",
			});
		},
	});
};
