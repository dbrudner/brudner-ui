import * as React from "react";

type ListItemProps = {
	type?: "nav";
	active?: true;
};

const createStyle = (props: ListItemProps) => {
	return {
		margin: "7px",
		textTransform:
			props.type === "nav"
				? ("uppercase" as "uppercase")
				: ("none" as "none"),
		color: props.active ? "green" : "black",
		cursor: props.type === "nav" ? "pointer" : "none"
	};
};

export const ListItem: React.SFC<ListItemProps> = props => (
	<li style={createStyle(props)}>{props.children}</li>
);
