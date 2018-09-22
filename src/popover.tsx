import * as React from "react";

export interface PopoverProps {
	content: React.ReactNode;
	title?: string;
	trigger: "click" | "hover";
}

export interface PopoverState {
	showPopover: boolean;
}

type PopoverEvent = {
	click: {
		onClick: () => void;
	};
	hover: {
		onMouseEnter: () => void;
		onMouseLeave: () => void;
	};
};

const popoverContentStyle = {
	border: "1px solid black",
	padding: "10px"
};

export class Popover extends React.Component<PopoverProps, PopoverState> {
	constructor(props: PopoverProps) {
		super(props);
		this.state = {
			showPopover: false
		};
	}

	getPopoverContentStyle = () => {
		return {
			position: "absolute" as "absolute"
		};
	};

	renderPopover = () => {
		const { title, content } = this.props;

		return (
			<div style={this.getPopoverContentStyle()}>
				<div>
					<h5>{title}</h5>
				</div>
				<div ref="content" id="content" style={popoverContentStyle}>
					{content}
				</div>
			</div>
		);
	};

	togglePopover = () => {
		this.setState({ showPopover: !this.state.showPopover });
	};

	createPopoverEvent = (): PopoverEvent => ({
		click: { onClick: this.togglePopover },
		hover: {
			onMouseEnter: this.togglePopover,
			onMouseLeave: this.togglePopover
		}
	});

	render() {
		return (
			<div style={{ display: "inline-block", position: "relative" }}>
				{this.state.showPopover && this.renderPopover()}
				<div
					style={{ zIndex: 1 }}
					{...this.createPopoverEvent()[this.props.trigger]}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}
