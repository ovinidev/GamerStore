import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {}

export const Button = (props: ButtonProps) => {
	return (
		<TouchableOpacity className="rounded-md bg-primary p-2" {...props}>
			<Text className="text-center font-bold text-md text-slate-50">
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};
