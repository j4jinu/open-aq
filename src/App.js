import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./container/Home";
import Layout from "./layout/Layout";

function App() {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route path='/' component={Home} exact />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
