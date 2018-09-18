import * as React from "react";
import { shallow } from "enzyme";
import { Button } from "../src/buttons/button";

describe("Test", () => {
	it("should pass this test", () => {
		const wrapper = shallow(<Button status="danger" />);
		expect(wrapper.find("button")).toHaveLength(1);
	});
});
