import * as React from "react";

export const responsive = (WrappedComponent: any) => {
	return class Responsive extends React.Component<any, { width: number }> {
		constructor(props: any) {
			super(props);
			this.state = {
				width: 0
			};
		}

		getWidth = () => this.setState({ width: window.innerWidth });

		componentDidMount() {
			this.getWidth();
			window.addEventListener("resize", this.getWidth);
		}

		render() {
			return (
				<WrappedComponent width={this.state.width} {...this.props} />
			);
		}
	};
};
