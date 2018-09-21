import * as React from "react";

export interface PopoverProps {
	content: React.ReactNode;
	title: string;
	trigger: "click" | "hover";
}

export interface PopoverState {}

class Popover extends React.Component<PopoverProps, PopoverState> {
	constructor(props: PopoverProps) {
		super(props);
		this.state = {
			showPopover: false
		};
	}

	renderPopover = () => {
		const { title, content } = this.props;

		return (
			<>
				<div style={{}}>
					<h5>{title}</h5>
				</div>
				<div>{content}</div>
			</>
		);
	};

	render() {
		return <div>{this.props.children}</div>;
	}
}

export default Popover;
