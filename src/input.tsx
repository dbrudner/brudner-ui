import * as React from "react";

export interface InputProps {}

export interface InputState {
	value: string;
}

class Input extends React.Component<InputProps, InputState> {
	constructor(props: InputProps) {
		super(props);
		this.state = { value: "" };
	}
	render() {
		return (
			<input
				value={this.state.value}
				onChange={e => this.setState({ value: e.target.value })}
			/>
		);
	}
}

export default Input;
