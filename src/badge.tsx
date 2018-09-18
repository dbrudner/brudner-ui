import * as React from "react";

const badgeStyle = {
	backgroundColor: "#23244a",
	color: "#fff",
	textTransform: "uppercase" as "uppercase",
	display: "inline-block",
	padding: "2px 5px",
	fontSize: ".65em"
};

export const Badge: React.SFC<{ style?: React.CSSProperties }> = ({
	children,
	style
}) => <div style={{ ...badgeStyle, ...style }}>{children}</div>;
