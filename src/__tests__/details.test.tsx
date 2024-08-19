import { GAME_MOCK } from "@constants/mock";
import { useGameById } from "@queries/games";
import { render } from "@testing-library/react-native";
import React from "react";
import Details from "../app/details";

jest.mock("expo-router", () => ({
	Stack: {
		Screen: "Screen",
		Navigator: "Navigator",
	},
	useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		setParams: jest.fn(),
	}),
}));

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		data: jest.fn(),
	}),
}));

jest.mock("@queries/games", () => ({
	useGameById: jest.fn(),
}));

const useGameByIdMocked = useGameById as jest.Mock;

test("Details page", () => {
	useGameByIdMocked.mockReturnValue({
		data: GAME_MOCK,
	});

	const { toJSON } = render(<Details />);
	expect(toJSON()).toMatchSnapshot();
});
