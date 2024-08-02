import { Text, View } from "react-native";

interface DetailsItemProps {
	label?: string;
	value: string;
}

export const DetailsItem = ({ label, value }: DetailsItemProps) => {
	return (
		<View className="w-full">
			<View className="flex flex-row gap-2">
				{label && (
					<Text className="font-semibold text-slate-100 text-xl">{label}:</Text>
				)}
				<Text className=" text-slate-100 text-xl">{value}</Text>
			</View>
		</View>
	);
};
