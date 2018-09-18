import * as React from "react";
import styled from "styled-components";

const StyledListGroupItem = styled.li`
	list-style: none;
	padding: 20px;
	border: ${(props: any) =>
		props.bottomBorder ? "none" : "1px solid #cacaca"};
	padding-left: ${(props: any) => (props.bottomBorder ? "0" : "20px")};
	border-bottom: 1px solid #cacaca;

	:last-child {
		border-bottom: none;
	}
`;

export const ListGroupItem = (props: any) => (
	<StyledListGroupItem {...props}>{props.children}</StyledListGroupItem>
);
