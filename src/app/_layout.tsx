import "../styles/global.css";
import { clientPersister } from "@services/mmkv";
import { queryClient } from "@services/queryClient";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack } from "expo-router";
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
					headerTitleAlign: "center",
				}}
			/>

			<Toast />
		</PersistQueryClientProvider>
	);
}
