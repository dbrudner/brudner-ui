import * as React from "react";
import { responsive } from "./responsive";
import isLargeScreen from "./helpers/is-large-screen";

const getHorizontalCardStyle = (width: number) => {
	return {
		display: isLargeScreen(width) ? "grid" : "",
		gridTemplateColumns: "50% 50%"
	};
};

const HCard: React.SFC = (props: any) => (
	<div style={{ ...getHorizontalCardStyle(props.width), ...props.style }}>
		{props.children}
	</div>
);

export const HorizontalCard = responsive(HCard);
