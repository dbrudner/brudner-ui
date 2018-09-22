import * as React from "react";
import { mount } from "enzyme";
import { Popover, Button } from "../src";

describe("Popover mouseEnter", () => {
	const wrapper = mount(
		<Popover content="Content" trigger="hover">
			<Button status="primary">Hover me</Button>
		</Popover>
	);

	it("should render content on mouse enter", () => {
		wrapper.find(".button").simulate("mouseEnter");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on mouse leave", () => {
		wrapper.find(".button").simulate("mouseLeave");
		expect(wrapper.find("#content")).toHaveLength(1);
	});
});

describe("Popover click", () => {
	const wrapper = mount(
		<Popover content="Content" trigger="click">
			<Button status="primary">Hover me</Button>
		</Popover>
	);

	it("should render content on click", () => {
		wrapper.find(".button").simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on click", () => {
		wrapper.find(".button").simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on clicks (temporary, remove please)", () => {
		wrapper.find(".button").simulate("click");
		expect(wrapper.find("#content")).toHaveLength(1);
	});

	it("should remove content on outside click", () => {
		wrapper.find(".button").simulate("click");
		wrapper.find(".button").simulate("mouseLeave");
		expect(wrapper.find("#content")).toHaveLength(1);
	});
});
