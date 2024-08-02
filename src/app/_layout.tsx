import "../styles/global.css";
import { Stack } from "expo-router";
import { queryClient } from "@services/queryClient";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { clientPersister } from "@services/mmkv";
import Toast from "react-native-toast-message";

export default function Layout() {
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister: clientPersister }}
		>
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

			<Toast />
		</PersistQueryClientProvider>
	);
}
