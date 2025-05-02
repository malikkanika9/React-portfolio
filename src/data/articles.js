import React from "react";

function article_1() {
	return {
		date: "Sep 2022",
		title: "Full Stack Web Development",
		description:
  "Certified in Full Stack Web Development from Masai School, demonstrating my expertise in building robust and scalable web applications.",
	keywords: ["Certifications", "Kanika", "Full Stack Web Development", "Masai School"],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding: 1rem;
			}
			.certItem {
				margin-bottom: 1rem;
				font-size: 1.1rem;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="certItem">🎓 Full Stack Web Development – Masai School (2022)</div>
					<div className="certItem">🎖 MCA – Maharshi Dayanand University, Rohtak (2016)</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Feb 2023",
		title: "Awards & Recognitions",
		description:
			"WOW Award' (Wonderful Outstanding Worker) at Indus Net Technologies Pvt. Ltd. for Project: SVASS PWA for contributions as front-end developer, client requirement gathering and enabling ease of collaboration among team mebers and clients",
		keywords: ["Awards", "WOW Award", "Kanika", "Front-end Developer"],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding: 1rem;
			}
			.awardItem {
				margin-bottom: 1rem;
				font-size: 1.1rem;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="awardItem">🏆 WOW Award – Indus Net Technologies (2022)</div>
					<div className="awardItem">💻 SVASS PWA – Project Success Recognition</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
