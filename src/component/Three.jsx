import { React } from "react";
import ThreeScene from "../threejs/main";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import ModernPortfolio from "./ModernPortfolio";

export default function Three() {
	// const navigate = useNavigate();

	// const handleClick = () => {
	// 	navigate("/modernPortfolio");
	// };
	console.log(localStorage.getItem("loadThree"));
	if (
		localStorage.getItem("loadThree") < 1 &&
		localStorage.getItem("loadThree") != undefined
	) {
		localStorage.setItem("loadThree", localStorage.getItem("loadThree") + 1);
		location.reload();
	} else {
		localStorage.setItem("loadThree", 0);
	}
	return (
		<>
			<div className="experience">
				<canvas className="experience-canvas">
					<ThreeScene />
				</canvas>
			</div>
			<button id="chuyentrang">
				<a href="./ModernPortfolio">Create Your Portfolio</a>
			</button>
		</>
	);
}
