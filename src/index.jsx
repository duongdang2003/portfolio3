import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThreeScene from "./threejs/main";
import ModernPortfolio from "./component/ModernPortfolio";
import Three from "./component/Three";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Three />}></Route>
				<Route path="/three" element={<Three />}></Route>
				<Route path="/modernPortfolio" element={<ModernPortfolio />}></Route>
			</Routes>
		</BrowserRouter>
	</>
);
