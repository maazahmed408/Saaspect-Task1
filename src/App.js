import "./App.css";
import BlogPage from "./components/BlogPage";
import PostDetail from "./components/PostDetail";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";

import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={BlogPage} />
					<Route exact path="/posts/:postId" component={PostDetail} />
					<Route exact path="/add-post" component={AddPost} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
