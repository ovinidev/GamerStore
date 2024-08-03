import { render } from "@testing-library/react-native";
import { GameItem } from "./index";
import { GAME_MOCK } from "@constants/mock";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		addToCart: jest.fn(),
		deleteFromCart: jest.fn(),
	}),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn(),
}));

describe("GameItem", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(
			<GameItem data={GAME_MOCK} isInTheCart={false} />,
		);

		expect(toJSON()).toMatchSnapshot();
	});
});
