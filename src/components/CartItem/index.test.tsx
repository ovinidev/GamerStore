import { render } from "@testing-library/react-native";
import { CartItem } from "./index";
import { GAME_MOCK } from "@constants/mock";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		deleteFromCart: jest.fn(),
	}),
}));

jest.mock("@utils/handleNavigate", () => ({
	handleNavigate: jest.fn(),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn(),
}));

jest.mock("@expo/vector-icons/Feather", () => "Feather");

describe("CartItem", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(<CartItem data={GAME_MOCK} />);

		expect(toJSON()).toMatchSnapshot();
	});
});
