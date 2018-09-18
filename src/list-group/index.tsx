import * as React from "react";

type ListGroupProps = {
	style: React.CSSProperties;
};

const listGroupStyle = {
	padding: 0
};

export const ListGroup: React.SFC<ListGroupProps> = props => (
	<ul style={{ ...props.style, ...listGroupStyle }}>{props.children}</ul>
);

export * from "./list-group-item";
