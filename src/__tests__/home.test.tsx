import { GAMES_MOCK } from "@constants/mock";
import { useGames } from "@queries/games";
import { render } from "@testing-library/react-native";
import React from "react";
import Home from "../app/index";

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

describe("Home page", () => {
	it("should match the snapshot", () => {
		mockUseGames.mockReturnValue({
			data: GAMES_MOCK,
		});

		const { toJSON } = render(<Home />);
		expect(toJSON()).toMatchSnapshot();
	});
});
