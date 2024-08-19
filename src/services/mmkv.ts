import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const clientStorage = {
	setItem: <T>(key: string, value: T) => {
		const valueToSet =
			typeof value === "string" ? value : JSON.stringify(value);

		storage.set(key, valueToSet);
	},
	getItem: <T>(key: string): T | null => {
		const value = storage.getString(key);
		return value === undefined ? null : (value as T);
	},
	removeItem: (key: string) => {
		storage.delete(key);
	},
};

export const clientPersister = createSyncStoragePersister({
	storage: clientStorage,
});
