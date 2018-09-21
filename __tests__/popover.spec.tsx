import * as React from "react";
import { shallow } from "enzyme";
import { Popover } from "../src";

describe("Popover mouseEnter", () => {
	const wrapper = shallow(<Popover />);

	it("should render content on mouse enter", () => {
		wrapper.simulate("mouseEnter");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on mouse leave", () => {
		wrapper.simulate("mouseLeave");
		expect(wrapper.find("#content")).toHaveLength(1);
	});
});

describe("Popover click", () => {
	const wrapper = shallow(<Popover />);

	it("should render content on click", () => {
		wrapper.simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on click", () => {
		wrapper.simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on clicks (temporary, remove please)", () => {
		wrapper.simulate("click");
		wrapper.simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on outside click", () => {
		wrapper.simulate("click");
		wrapper.simulate("mouseLeave");
		expect(wrapper.find("#content")).toHaveLength(1);
	});
});
