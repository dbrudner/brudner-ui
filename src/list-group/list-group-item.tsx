import * as React from "react";

type ListGroupItem = {
	bottomBorder: boolean;
};

const getListGroupItemStyle = (props: ListGroupItem) => ({
	listStyle: "none",
	padding: "20px",
	border: props.bottomBorder ? "none" : "1px solid #cacaca",
	paddingLeft: props.bottomBorder ? "0" : "20px",
	borderBottom: "1px solid #cacaca"
});

export const ListGroupItem: React.SFC<ListGroupItem> = props => (
	<li style={getListGroupItemStyle(props)} {...props}>
		{props.children}
	</li>
);
