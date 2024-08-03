import Toast from "react-native-toast-message";

interface UseToastProps {
	type: string;
	text: string;
}

export const useToast = () => {
	const handleShowToastMessage = ({ type, text }: UseToastProps) => {
		Toast.show({
			type,
			text1: text,
			position: "bottom",
			visibilityTime: 1500,
		});
	};

	return {
		handleShowToastMessage,
	};
};
