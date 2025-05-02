import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./download.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Octet Design Studio</div>
							<div className="work-subtitle">
							Senior Web Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./int-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Indus Net Technologies</div>
							<div className="work-subtitle">
							 Associate Software Engineer 
							</div>
							<div className="work-duration">Sep’22-Sep’23</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
