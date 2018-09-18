import * as React from "react";
import styled from "styled-components";

type ListGroupItem = {
	bottomBorder: boolean;
};

const StyledListGroupItem = styled.li`
	list-style: none;
	padding: 20px;
	border: ${(props: ListGroupItem) =>
		props.bottomBorder ? "none" : "1px solid #cacaca"};
	padding-left: ${(props: ListGroupItem) =>
		props.bottomBorder ? "0" : "20px"};
	border-bottom: 1px solid #cacaca;

	:last-child {
		border-bottom: none;
	}
`;

export const ListGroupItem: React.SFC<ListGroupItem> = props => (
	<StyledListGroupItem {...props}>{props.children}</StyledListGroupItem>
);
