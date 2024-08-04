import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../app/index";
import { useGames } from "@queries/games";
import { GAMES_MOCK } from "@constants/mock";

jest.mock("expo-router", () => ({
	Stack: {
		Screen: "Screen",
		Navigator: "Navigator",
	},
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		setParams: jest.fn(),
	}),
}));

jest.mock("@queries/games", () => ({
	useGames: jest.fn(),
}));

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		data: jest.fn(),
	}),
}));

const mockUseGames = useGames as jest.Mock;

describe("Home", () => {
	it("should match the snapshot", () => {
		mockUseGames.mockReturnValue({
			data: GAMES_MOCK,
		});

		const { toJSON } = render(<Home />);
		expect(toJSON()).toMatchSnapshot();
	});
});
