import * as React from "react";
import { colors } from "../colors";

export type ButtonProps = {
	status: "primary" | "secondary" | "danger" | "default" | "search";
	type?: string;
	onClick?: () => void;
};

const getButtonStyle = (props: any) => {
	const backgroundColor = colors[props.status] || colors.default;
	return {
		border: props.status === "search" ? "none" : "1px solid #cacaca",
		fontSize: "15px",
		letterSpacing: "1px",
		color: props.status === "search" ? "black" : "#fff",
		transform: props.status === "search" ? "translateX(-50px)" : "",
		textTransform: "uppercase" as "uppercase",
		padding: "8px 16px",
		backgroundColor: backgroundColor,
		fontFamily: "Assistant",
		paddingLeft: "18px",
		cursor: "pointer"
	};
};

export const Button: React.SFC<ButtonProps> = props => (
	<button {...props} style={getButtonStyle(props)}>
		{props.children}
	</button>
);
