import { STALE_TIME } from "@constants/staleTime";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

describe("Query Client", () => {
	it("should be able to create an instance of QueryClient", () => {
		expect(queryClient).toBeInstanceOf(QueryClient);
	});

	it("should have the correctly stale time", () => {
		const { queries } = queryClient.getDefaultOptions();

		if (queries) {
			expect(queries.staleTime).toBe(STALE_TIME);
		}
	});
});
