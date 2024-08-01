import { QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { Stack } from "expo-router";
import { queryClient } from "@services/queryClient";

export default function Layout() {
	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: "#EB3678",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			/>
		</QueryClientProvider>
	);
}
