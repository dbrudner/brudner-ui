import * as React from "react";
import { responsive } from "../responsive";
import isLargeScreen from "../helpers/is-large-screen";

type ListProps = {
	align?: "horizontal";
	type?: "nav";
	width: number;
};

const createListStyle = (props: ListProps) => ({
	display:
		props.align || (isLargeScreen(props.width) && props.type === "nav")
			? "flex"
			: "block",
	listStyle: "none"
});

export const List: React.SFC<ListProps> = props => {
	return <ul style={createListStyle(props)}>{props.children}</ul>;
};

export const ResponsiveList = responsive(List);

export * from "./list-item";
