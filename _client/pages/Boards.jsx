import React, { Component } from "react";
import Collapse from "../components/Collapse";
import BoardTrack from "../components/BoardTrack";

class Boards extends Component {
	render() {
		return (
			<div className="main">
				<div className="boards-container">
					<h1>Boards</h1>
					<React.Fragment>
						<Collapse
							title="Standalone Collapse Bar"
							src="IMG"
							alt="some image"
						>
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
						</Collapse>

						<Collapse
							title="Standalone Collapse Bar"
							src="IMG"
							alt="some image"
						>
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
						</Collapse>

						<Collapse
							title="Standalone Collapse Bar"
							src="IMG"
							alt="some image"
						>
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
							<BoardTrack />
						</Collapse>
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default Boards;
