import * as React from "react";

const listGroupStyle = {
	padding: 0
};

export const ListGroup = (props: any) => (
	<ul style={{ ...props.style, ...listGroupStyle }}>{props.children}</ul>
);

export * from "./list-group-item";
