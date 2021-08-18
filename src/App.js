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

import Navbar from './component/Navbar/Navbar'

const App = () => {
	return (
		<Router>

			<Navbar />

			<main>

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/about" exact>
						<About />					
					</Route>
		
					<Route path="/contact" exact>
						<Contact />
					</Route>
		
					<Route path="/testimonial" exact>
						<Testimonial />
					</Route>

					<Route path="/service" exact>
						<Service />
					</Route>

					<Redirect to="/" />
				</Switch>

			</main>

		</Router>
	);
}

export default App;
