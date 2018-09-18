import * as React from "react";
import { Button } from "./index";

const searchInput = {
	height: "37px",
	border: "none",
	borderBottom: "1px solid #cacaca",
	paddingLeft: "12px",
	paddingRight: "50px",
	fontFamily: "Muli"
};

export class SearchForm extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: ""
		};
	}

	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.value);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					style={searchInput}
					onChange={e => this.setState({ value: e.target.value })}
					type="text"
				/>
				<Button status="search">
					<i className="fa fa-search" />
				</Button>
			</form>
		);
	}
}
