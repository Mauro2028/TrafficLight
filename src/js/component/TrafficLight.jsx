import React from "react";

export default class TrafficLight extends React.Component {
	
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}
	render() {
		let redExtraClass = "";
		if (this.state.selectedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.selectedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.selectedLight == "green") greenExtraClass = "selected";
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light" + redExtraClass}
						onClick={() => this.setState({ selectedLight: "red" })}
					/>
					<div
						className={"yellow light" + yellowExtraClass}
						onClick={() =>
							this.setState({ selectedLight: "yellow" })
						}
					/>
					<div
						className={"green light" + greenExtraClass}
						onClick={() =>
							this.setState({ selectedLight: "green" })
						}
					/>
				</div>
			</div>
		);
	}
}
