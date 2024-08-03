import { render } from "@testing-library/react-native";
import { Header } from "./index";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		data: {
			carts: [],
		},
	}),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
	}),
	Stack: {
		Screen: jest
			.fn()
			.mockImplementation(({ options }) => <>{options.headerTitle?.()}</>),
	},
}));

describe("Header", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(<Header />);

		expect(toJSON()).toMatchSnapshot();
	});
});
