import './App.css';
import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Testimonial from "./pages/testimonial/Testimonial"
import Service from "./pages/service/Service"

const App = () => {
	return (
		<div className="App">
			Hello Jesus

		</div>
	);
}

export default App;
