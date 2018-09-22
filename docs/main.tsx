import * as React from "react";
import { Popover, Button } from "../src";

export default () => (
	<div style={{ margin: "100px" }}>
		<Popover trigger="click" content="Expand">
			<Button status="primary">Hi</Button>
		</Popover>
	</div>
);
