import * as React from "react";
import { ButtonProps } from "./button";
import { colors } from "../colors";

type FloatingButtonProps = ButtonProps & {
	style: React.CSSProperties;
};

const getFloatingButtonStyle = (props: { status: any }) => ({
	borderRadius: "25px",
	border: "none",
	backgroundColor: colors[props.status] || colors.default,
	color: "#fff",
	fontSize: "48px",
	lineHeight: "24px",
	boxShadow: "3px 3px 3px #4d4d4d",
	cursor: "pointer"
});

export const FloatingButton: React.SFC<FloatingButtonProps> = props => (
	<button
		{...props}
		style={{ ...getFloatingButtonStyle(props), ...props.style }}
	>
		{props.children}
	</button>
);
