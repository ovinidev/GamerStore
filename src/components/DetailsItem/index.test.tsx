import { render } from "@testing-library/react-native";
import { DetailsItem } from ".";

describe("DetailsItem", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(<DetailsItem label="Title" value="Test" />);

		expect(toJSON()).toMatchSnapshot();
	});

	it("should be able to get text", () => {
		const { getByText } = render(<DetailsItem label="Title" value="Test" />);

		expect(getByText("Test")).toBeTruthy();
	});
});
